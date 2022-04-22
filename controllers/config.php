<?php
    header("Access-Control-Allow-Origin: *");

    $host = "localhost";
    $user = "root";
    $password = "";
    $dbName = "crudContainers";

    $connection = new mysqli($host, $user, $password, $dbName);

    if($connection -> connect_error){
        die("A conexão com o banco de dados falhou". $connection -> connect_error);
    }
?>