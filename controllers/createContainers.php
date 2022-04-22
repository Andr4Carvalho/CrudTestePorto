<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');
    session_start();

    $client = $_POST['client'];
    $numberContainer = $_POST['numberContainer'];
    $type = $_POST['type'];
    $status = $_POST['status'];
    $category = $_POST['category'];

    if(empty($client) || empty($numberContainer) || empty($type) || empty($status) || empty($category)){
        echo json_encode(["message" => "Todos os campos devem ser preenchidos!"]);
    } else {
        $str = "SELECT * FROM containers WHERE numberContainer='$numberContainer'";
        $response = $connection -> query($str);
        if($response -> num_rows > 0){
            echo json_encode(["message" => "Esse container já está cadastrado"]);
        } else {
            $sql = "INSERT INTO containers(client, numberContainer, type, status, category) VALUES ('".$client."','".$numberContainer."','".$type."','".$status."','".$category."')";
            $result = $connection -> query($sql);
            if(!$result){
                http_response_code(500);
                echo json_encode(["message" => $sql]);
            } else {
                http_response_code(200);
                echo json_encode(["message" => "Container cadastrado com sucesso no banco de dados"]); 
            }
        }
    }
?>