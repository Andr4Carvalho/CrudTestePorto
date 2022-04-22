<?php
    header("Access-Control-Allow-Origin: *");

    require_once('config.php');
    
    $sql = "SELECT * FROM movements ORDER BY ID ASC";

    $resultado = $connection -> query($sql);

    if($resultado -> num_rows > 0){
        foreach($resultado as $row){
            echo"<tr>";
                echo"<td>".$row['numberContainer']."</td>";
                echo"<td>".$row['type']."</td>";
                echo"<td>".$row['hrStart']."</td>";
                echo"<td>".Date('d M - Y', strtotime($row['dtStart']))."</td>";
                echo"<td>".$row['hrEnd']."</td>";
                echo"<td>".Date('d M - Y', strtotime($row['dtEnd']))."</td>";
                echo"<td>";
                    echo"<ion-icon class='iconTable bg-warning rounded-pill p-2 text-white me-3' name='create-outline' onclick='fillModalUpdateMovement(".$row['ID'].")'></ion-icon>";
                    echo"<ion-icon class='iconTable bg-danger rounded-pill p-2 text-white' name='trash-outline' onclick='deleteMovement(".$row['ID'].")'></ion-icon>";
                echo"</td>";
            echo"</tr>";
        }
    } else {
        echo("");
    }
?>