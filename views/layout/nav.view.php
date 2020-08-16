<!DOCTYPE html>
<html>

    <head>
        <title><?= $TPL["title"] ?></title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="<?= Config::$STYLE_PATH . $TPL["assetsName"] . ".css" ?>" />
        <link rel="stylesheet" href="<?= Config::$STYLE_PATH . "nav.css"?>" />
        <link rel="stylesheet" href="<?= Config::$STYLE_PATH . "footer.css"?>" />
        <link rel="stylesheet" href="<?= Config::$STYLE_PATH . "main.css"?>" />
        <link rel="icon" type="image/x-icon" href="<?= Config::$IMG_PATH . "favicon.png"?>"/>
        <script type="text/javascript" src="<?= Config::$JS_PATH . $TPL["assetsName"] . ".js"?>"></script>
        <script type="text/javascript" src="<?= Config::$JS_PATH . "main.js"?>"></script>
        <script type="text/javascript" src="<?= Config::$JS_PATH . "footer.js"?>"></script>

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
            <img src="<?= Config::$IMG_PATH . "logo.png" ?>" alt="logo" id="logo" />
            <ul id="nav">
                <li><a href="/" class="<?= $TPL["action"] == 'Home' ? 'selected' : '' ?>">HOME</a></li>
                <li><a href="/services/" class="<?= $TPL["action"] == 'Services' ? 'selected' : '' ?>">SERVICES</a></li>
                <li><a href="/contact/" class="<?= $TPL["action"] == 'Contact' ? 'selected' : '' ?>">CONTACT</a></li>
                <li><a href="#" class="<?= $TPL["action"] == 'Commercial' ? 'selected' : '' ?>">COMMERCIAL</a></li>
                <li><a href="#" class="<?= $TPL["action"] == 'Gallery' ? 'selected' : '' ?>">GALLERY</a></li>
                <li><a href="/blog/" class="<?= $TPL["action"] == 'Blog' ? 'selected' : '' ?>">BLOG</a></li>
                <li><a href="/testimonials/" class="<?= $TPL["action"] == 'Testimonials' ? 'selected' : '' ?>">TESTIMONIALS</a></li>
            </ul>
        </nav>