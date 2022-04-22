<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');

    $numberContainer = $_POST['numberContainer'];
    $type = $_POST['type'];
    $hrStart = $_POST['hrStart'];
    $dtStart = $_POST['dtStart'];
    $hrEnd = $_POST['hrEnd'];
    $dtEnd = $_POST['dtEnd'];

    if(empty($numberContainer) || empty($type) || empty($hrStart) || empty($dtStart) || empty($hrEnd) || empty($dtEnd)){
        echo json_encode(["message" => "Todos os campos devem ser preenchidos!"]);
    } else {
        $sql = "INSERT INTO movements(numberContainer, type, hrStart, dtStart, hrEnd, dtEnd) VALUES ('".$numberContainer."','".$type."','".$hrStart."','".$dtStart."','".$hrEnd."','".$dtEnd."')";
        $result = $connection -> query($sql);
        if(!$result){
            http_response_code(500);
            echo json_encode(["message" => $sql]);
        } else {
            http_response_code(200);
            echo json_encode(["message" => "Movimentação cadastrada com sucesso no banco de dados"]); 
        }
    }
?>