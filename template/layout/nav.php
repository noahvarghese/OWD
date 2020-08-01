<!DOCTYPE html>
<html>

    <head>
        <title><?= ucfirst($results["title"]) ?></title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="<?= STYLE_PATH . $results["css"] . ".css" ?>" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "nav.css"?>" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "footer.css"?>" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "main.css"?>" />
        <link rel="icon" type="image/x-icon" href="<?= IMG_PATH . "favicon.ico"?>"/>
        <script type="text/javascript" src="<?= JS_PATH . $action . ".js"?>"></script>
        <script type="text/javascript" src="<?= JS_PATH . "main.js"?>"></script>
        <script type="text/javascript" src="<?= JS_PATH . "footer.js"?>"></script>

    <?

    if ( $results["title"] == "contact" )
    {
        
    ?>
        <script src="https://www.google.com/recaptcha/api.js?render=6LePVLMZAAAAAPLLObfHwB3bRCZySVKpNHgZyIqw"></script>
    <?
        
    }

    ?>
    
    </head>
    <body>
    <div id="main">
        <nav>
            <img src="<?= IMG_PATH . "logo.png" ?>" alt="logo" id="logo" />
            <ul id="nav">
                <li><a href="index.php?action=home" class="<?= $results["title"] == 'home' ? 'selected' : '' ?>">HOME</a></li>
                <li><a href="index.php?action=services" class="<?= $results["title"] == 'services' ? 'selected' : '' ?>">SERVICES</a></li>
                <li><a href="index.php?action=contact" class="<?= $results["title"] == 'contact' ? 'selected' : '' ?>">CONTACT</a></li>
                <li><a href="#" class="<?= $results["title"] == 'commercial' ? 'selected' : '' ?>">COMMERCIAL</a></li>
                <li><a href="#" class="<?= $results["title"] == 'gallery' ? 'selected' : '' ?>">GALLERY</a></li>
                <li><a href="index.php?action=blog" class="<?= $results["title"] == 'blog' ? 'selected' : '' ?>">BLOG</a></li>
                <li><a href="index.php?action=testimonials" class="<?= $results["title"] == 'testimonials' ? 'selected' : '' ?>">TESTIMONIALS</a></li>
            </ul>
        </nav>