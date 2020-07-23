<?php
    require_once("./config/config.php");

    $action = isset($_GET["action"]) ? $_GET["action"] : "";

    include(LAYOUT_PATH . "nav.php");

    $results = array();

    switch( $action )
    {
        case 'about':
            include(PAGE_PATH . "about.php");
            break;
        case 'services':
            include(PAGE_PATH . "services.php");
            break;
        case 'contact':
            include(PAGE_PATH . "contact.php");
            break;
        case 'commercial':
            include(PAGE_PATH . "notYet.php");
            break;
        case 'gallery':
            include(PAGE_PATH . "notYet.php");
            break;
        case 'blogs':
            include(PAGE_PATH . "blogs.php");
            break;
        case 'testimonials':
            include(PAGE_PATH . "testimonials.php");
            break;
        default:
            include(PAGE_PATH . "404.php");
            break;
    }

    include(LAYOUT_PATH . "footer.php");
?>