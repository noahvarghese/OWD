<?php
    require_once("./config/config.php");

    $action = isset($_GET["action"]) ? $_GET["action"] : "about";

    $results = array();
    $results["title"] = $action;
    $results["page"] = "";

    switch( $action )
    {
        case 'home':
            $results["title"] = $action;
            $results["page"] = PAGE_PATH . "home.php";
            break;
        case 'services':
            $results["page"] = PAGE_PATH . "services.php";
            break;
        case 'contact':
            $results["page"] = PAGE_PATH . "contact.php";
            break;
        case 'commercial':
            $results["page"] = PAGE_PATH . "notYet.php";
            break;
        case 'gallery':
            $results["page"] = PAGE_PATH . "notYet.php";
            break;
        case 'blog':
            $results["page"] = PAGE_PATH . "blog.php";
            break;
        case 'testimonials':
            $results["page"] = PAGE_PATH . "testimonials.php";
            break;
        case 'blogPost':
            $results["title"] = "blog";
            $results["page"] = PAGE_PATH . "blogPost.php";
            break;
        default:
            $results["page"] = PAGE_PATH . "404.php";
            break;
    }

    include(LAYOUT_PATH . "nav.php");
    include($results["page"]);
    include(LAYOUT_PATH . "footer.php");
?>