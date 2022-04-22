<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');
    
    $id = $_POST["id"];

    if(empty($id)){
        echo json_encode(["message" => "ID Inválido"]);
    } else {
        $sql = "DELETE FROM movements WHERE id='$id'";

        $response = $connection -> query($sql);

        if($response === TRUE){
            echo json_encode(["message" => "Movimentação deletada com sucesso!"]);
        } else {
            echo json_encode(["message" => "Erro ao excluir a movimentação!"]);
        }
    }
?>