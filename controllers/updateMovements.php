<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');

    $id = $_POST['id'];
    $numberContainer = $_POST['numberContainer'];
    $type = $_POST['type'];
    $hrStart = $_POST['hrStart'];
    $dtStart = $_POST['dtStart'];
    $hrEnd = $_POST['hrEnd'];
    $dtEnd = $_POST['dtEnd'];

    if(empty($id) || empty($numberContainer) || empty($type) || empty($hrStart) || empty($dtStart) || empty($hrEnd) || empty($dtEnd)){
        echo json_encode(["message" => "Todos os campos devem ser preenchidos!"]);
    } else {
        $sql = "UPDATE movements SET numberContainer='$numberContainer', type='$type', hrStart='$hrStart', dtStart='$dtStart', hrEnd='$hrEnd', dtEnd='$dtEnd' WHERE id='$id'";

        $response = $connection -> query($sql);

        if($response === TRUE){
            echo json_encode(["message" => "Movimentação atualizada com sucesso"]);
        } else {
            echo json_encode(["message" => "Erro ao atualizar a movimentação"]);
        }
    }
?>