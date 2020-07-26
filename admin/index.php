<?php
    require_once("../config/config.php");
    session_start();
    $action = isset($_GET["action"]) ? $_GET["action"] : "home";

    $results = array();
    $results["title"] = $action;
    $results["page"] = "";

    $username = isset( $_SESSION['username'] ) ? $_SESSION['username'] : "";

    if ( isset( $_SESSION['user'] ) == false )
    {
        include("./adminNav.php");
        
        switch ( $action )
        {
            case 'home':
                break;
            case 'services':
                break;
            case 'contact':
                break;
            case 'gallery':
                break;
            case 'blog':
                include("./blog.php");
                break;
            case 'addBlog':
                $results["title"] = "blog";
                include("./blogPost.php");
                break;
            default:
            echo $action;
                include("./404.php");
                break;
        }
    }
    else
    {
        include("./login.php");
    }
?>