<?php

    require_once("./functions.php");

    class sqlConnect {
        private static $database =  "OWD";
        private static $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_BOTH,
            PDO::ATTR_EMULATE_PREPARES => false
        ];
        private static $char = "utf8";
        private static $server = "mysql.nvarghese.com";
        private static $user = "owd";
        private static $pwd = "zqpThWqiFEgZp9+n8B4NWEf6ZnZxiABOr5r7wn11H2M=";
        
        public static function db() {
            return new PDO(
                "mysql:host=" . sqlConnect::$server . 
                ";dbname=" . sqlConnect::$database . 
                ";charset=" . sqlConnect::$char, 
                sqlConnect::$user, 
                decrypt(sqlConnect::$pwd), 
                sqlConnect::$options);
        }
    }
?>