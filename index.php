<?php
    require_once("config.php");
    require_once("assets.php");

    $action = isset($_GET["action"]) ? $_GET["action"] : "";

    include(Assets::header($action));
    include(Assets::$layoutFolder . "nav.php");

    switch( $action )
    {
        case 'about':

            break;
        case 'about':
    
            break;
    }

    include(Assets::$layoutFolder . "footer.php");
?>