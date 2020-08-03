<?php

try {
    $database =  "OWD";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_BOTH,
        PDO::ATTR_EMULATE_PREPARES => false
    ];

    $char = "utf8";
    $server = "mysql.nvarghese.com";
    $user = "owd";
    $pwd = "zqpThWqiFEgZp9+n8B4NWEf6ZnZxiABOr5r7wn11H2M=";

    $db = new PDO("mysql:host=$server;dbname=$database;charset=$char", $user, decrypt($pwd), $options);
} catch (Exception $e) {
    die("ERROW: Couldn't connect. {$e->getMessage()}");
}

?>