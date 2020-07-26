<!DOCTYPE html>
<html>

    <head>
        <title><?= ucfirst($action) ?></title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "admin.css"?>" />
        <link rel="icon" type="image/x-icon" href="<?= IMG_PATH . "favicon.ico"?>"/>
        <script type="text/javascript" src="<?= JS_PATH . "admin.js"?>"></script>    
    </head>
    <body>
    <div id="main">
        <nav>
            <img src="<?= IMG_PATH . "logo.png" ?>" alt="logo" id="logo" />
            <ul id="nav">
                <li><a href="index.php?action=about" class="<?= $action == 'about' ? 'selected' : '' ?>">ABOUT</a></li>
                <li><a href="index.php?action=services" class="<?= $action == 'services' ? 'selected' : '' ?>">SERVICES</a></li>
                <li><a href="index.php?action=contact" class="<?= $action == 'contact' ? 'selected' : '' ?>">CONTACT</a></li>
                <li><a href="#" class="<?= $action == 'gallery' ? 'selected' : '' ?>">GALLERY</a></li>
                <li><a href="#" class="<?= $action == 'blogs' ? 'selected' : '' ?>">BLOGS</a></li>
            </ul>
        </nav>