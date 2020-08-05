<?php
    require_once("./config/config.php");
    session_start();
    $action = isset($_GET["action"]) ? $_GET["action"] : "home";

    $results = array();
    $results["title"] = $action;
    $results["css"] = $action;
    $results["page"] = "";

    $_SESSION['username'] = "hi";

    if ( isset( $_SESSION['username'] ) )
    {
        
        switch ( $action )
        {
            case 'home':
                $results["title"] = "Home";
                $results["page"] = PAGE_PATH . "home.php";
                break;
            case 'services':
                break;
            case 'contact':
                break;
            case 'gallery':
                $results["title"] = "Gallery";
                break;
            case 'addGallery':
                $results["title"] = "Add Image";
                $results["page"] = PAGE_PATH . "addGallery.php";
                break;
            case 'blog':
                $results["title"] = "Blog";
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