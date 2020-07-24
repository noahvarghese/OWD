<?php
    require_once("../config/config.php");
    session_start();
    $action = isset($_GET["action"]) ? $_GET["action"] : "";
    $username = isset( $_SESSION['username'] ) ? $_SESSION['username'] : "";

    if ( $_SESSION['user'] )
    {
        include("." . PAGE_PATH . "adminNav.php");
        
        switch ( $action )
        {
            case 'about':
                break;
            case 'services':
                break;
            case 'contact':
                break;
            case 'gallery':
                break;
            case 'blog':
                break;
            default:
                include("." . PAGE_PATH . "404.php");
                break;
        }
    }
    else
    {
        include("." . PAGE_PATH . "login.php");
    }
?>