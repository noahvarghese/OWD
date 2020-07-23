<!DOCTYPE html>
<html>

    <head>
        <title><?= ucfirst($action) ?></title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="<?= STYLE_PATH . $action . ".css" ?>" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "nav.css"?>" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "footer.css"?>" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "main.css"?>" />
        <link rel="icon" type="image/x-icon" href="<?= IMG_PATH . "favicon.ico"?>"/>
        <script type="text/javascript" src="<?= JS_PATH . $action . ".js"?>"></script>
        <script type="text/javascript" src="<?= JS_PATH . "main.js"?>"></script>
        <script type="text/javascript" src="<?= JS_PATH . "footer.js"?>"></script>

    <?

    if ( $action == "contact" )
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
            <img src="<?= Assets::imageAssets('logo.png') ?>" alt="logo" id="logo" />
            <ul id="nav">
                <li><a href="../pages/about.php" class="<?= $action == 'about' ? 'selected' : '' ?>">ABOUT</a></li>
                <li><a href="../pages/services.php" class="<?= $action == 'services' ? 'selected' : '' ?>">SERVICES</a></li>
                <li><a href="../pages/contact.php" class="<?= $action == 'contact' ? 'selected' : '' ?>">CONTACT</a></li>
                <li><a href="#" class="<?= $action == 'commercial' ? 'selected' : '' ?>">COMMERCIAL</a></li>
                <li><a href="#" class="<?= $action == 'gallery' ? 'selected' : '' ?>">GALLERY</a></li>
                <li><a href="#" class="<?= $action == 'blogs' ? 'selected' : '' ?>">BLOGS</a></li>
                <li><a href="../pages/testimonials.php" class="<?= $action == 'testimonials' ? 'selected' : '' ?>">TESTIMONIALS</a></li>
            </ul>
        </nav>