<!DOCTYPE html>
<html>

    <head>
        <title><?= ucfirst($results["title"]) ?></title>
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
                <li><a href="index.php?action=about" class="<?= $results["title"] == 'about' ? 'selected' : '' ?>">ABOUT</a></li>
                <li><a href="index.php?action=services" class="<?= $results["title"] == 'services' ? 'selected' : '' ?>">SERVICES</a></li>
                <li><a href="index.php?action=contact" class="<?= $results["title"] == 'contact' ? 'selected' : '' ?>">CONTACT</a></li>
                <li><a href="#" class="<?= $results["title"] == 'gallery' ? 'selected' : '' ?>">GALLERY</a></li>
                <li><a href="index.php?action=blog" class="<?= $results["title"] == 'blog' ? 'selected' : '' ?>">BLOG</a></li>
            </ul>
        </nav>