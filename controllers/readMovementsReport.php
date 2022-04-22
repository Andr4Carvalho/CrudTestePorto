<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');
    
    $sql = "SELECT * FROM movements INNER JOIN containers ON containers.numberContainer = movements.numberContainer";

    $response = $connection -> query($sql);

    if($response -> num_rows > 0){
        foreach($response as $row){
            echo"<tr>";
                echo"<th scope='row'>".$row['numberContainer']."</th>";
                echo"<td>".$row['client']."</td>";
                echo"<td>".$row['type']."</td>";
            echo"</tr>";
        }
    } else {
        echo("");
    }
?>