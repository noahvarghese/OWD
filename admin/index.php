<?php
    require_once("./config/config.php");
    session_start();
    $action = isset($_GET["action"]) ? $_GET["action"] : "home";

    $results = array();
    $results["title"] = $action;
    $results["page"] = "";

    $username = isset( $_SESSION['username'] ) ? $_SESSION['username'] : "hey";

    if ( isset( $username ) )
    {
        include("./nav.php");
        
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
                $results["title"] = "Add Post";
                include("./blogPost.php");
                break;
            default:
                include("./404.php");
                break;
        }
    }
    else
    {
        include("./login.php");
    }
?>