<?php
    require_once("./config/config.php");
    session_start();
    $action = isset($_GET["action"]) ? $_GET["action"] : "home";

    $action = "addBlog";
    $_SESSION['username'] = "";

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
                $results["page"] = PAGE_PATH . "blog.php";
                break;
            case 'addBlog':
                $results["title"] = "Add Post";
                $results["page"] = PAGE_PATH . "blogPost.php";
                break;
            default:
                $results["page"] = PAGE_PATH . "404.php";
                break;
        }

        include(LAYOUT_PATH . "nav.php");
    }
    else
    {
        $results["page"] = PAGE_PATH . "login.php";
    }
    include($results["page"]);
?>