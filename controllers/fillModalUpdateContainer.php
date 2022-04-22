<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');
    
    $id = $_POST["id"];

    if(empty($id)){
        echo json_encode(["message" => "ID Inválido"]);
    } else {
        $sql = "SELECT * FROM containers WHERE id='$id'";

        $response = $connection -> query($sql);

        $rows = array();

        if($response -> num_rows > 0){
            foreach($response as $r){
                $rows[] = $r;
            }
            echo json_encode($rows);
        } else {
            echo json_encode(["message" => "Não há nenhum container com esse ID em nosso banco de dados"]);
        }
    }
?>