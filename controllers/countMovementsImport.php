<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');
    
    $sql = "SELECT COUNT(category) AS total FROM containers WHERE category='Importação'";

    $response = $connection -> query($sql);

    $rows = array();

    if($response -> num_rows > 0){
        foreach($response as $r){
            $rows[] = $r;
        }
        echo($rows[0]["total"]);
    } else {
        echo json_encode(["message" => "Nenhuma movimentação encontrada"]);
    }
?>