<?php
    require_once("config.php");
    require_once("assets.php");

    $action = isset($_GET["action"]) ? $_GET["action"] : "";

    include(Assets::header($action));
    include(Assets::nav($action));

    switch( $action )
    {
        case 'about':

            break;
        case 'about':
    
            break;
    }
?>