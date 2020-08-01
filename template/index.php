<?php
    require_once("./config/config.php");

    $action = isset($_GET["action"]) ? $_GET["action"] : "home";

    $results = array();
    $results["title"] = $action;
    $results["page"] = "";
    $results["css"] = $action;

    switch( $action )
    {
        case 'home':
            $results["page"] = TEMPLATE_PATH . "home.php";
            break;
        case 'services':
            $results["page"] = TEMPLATE_PATH . "services.php";
            break;
        case 'contact':
            $results["page"] = TEMPLATE_PATH . "contact.php";
            break;
        case 'commercial':
            $results["page"] = TEMPLATE_PATH . "notYet.php";
            break;
        case 'gallery':
            $results["page"] = TEMPLATE_PATH . "notYet.php";
            break;
        case 'blog':
            $results["page"] = TEMPLATE_PATH . "blog.php";
            break;
        case 'testimonials':
            $results["page"] = TEMPLATE_PATH . "testimonials.php";
            break;
        case 'blogPost':
            $results["title"] = "blog";
            $results["page"] = TEMPLATE_PATH . "blogPost.php";
            break;
        default:
            $results["page"] = TEMPLATE_PATH . "404.php";
            break;
    }

    include(LAYOUT_PATH . "nav.php");
    include($results["page"]);
    include(LAYOUT_PATH . "footer.php");
?>