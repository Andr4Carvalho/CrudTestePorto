<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');
    
    $sql = "SELECT * FROM containers ORDER BY ID ASC";

    $resultado = $connection -> query($sql);

    if($resultado -> num_rows > 0){
        foreach($resultado as $row){
            echo"<option value='".$row['numberContainer']."'>".$row['numberContainer']."</option>";
        }
    } else {
        echo("Sem containers disponíveis");
    }
?>