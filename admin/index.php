<?php
    require_once("./config/config.php");
    session_start();
    $action = isset($_GET["action"]) ? $_GET["action"] : "home";

    $results = array();
    $results["title"] = $action;
    $results["css"] = $action;
    $results["page"] = "";

    if ( isset( $_SESSION['username'] ) )
    {
        
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
                $results["page"] = "./blog.php";
                break;
            case 'addBlog':
                $results["title"] = "Add Post";
                $results["page"] = "./blogPost.php";
                break;
            default:
                $results["page"] = "./404.php";
                break;
        }

        include("./nav.php");
    }
    else
    {
        $results["page"] = "./login.php";
    }
    include($results["page"]);
?>