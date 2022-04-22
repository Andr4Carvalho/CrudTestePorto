<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');

    $id = $_POST['id'];
    $client = $_POST['client'];
    $numberContainer = $_POST['numberContainer'];
    $type = $_POST['type'];
    $status = $_POST['status'];
    $category = $_POST['category'];

    if(empty($id) || empty($client) || empty($numberContainer) || empty($type) || empty($status) || empty($category)){
        echo json_encode(["message" => "Todos os campos devem ser preenchidos!"]);
    } else {
        $sql = "UPDATE containers SET client='$client', numberContainer='$numberContainer', type='$type', status='$status', category='$category' WHERE id='$id'";

        $response = $connection -> query($sql);

        if($response === TRUE){
            echo json_encode(["message" => "Container atualizado com sucesso"]);
        } else {
            echo json_encode(["message" => "Erro ao atualizar o container"]);
        }
    }
?>