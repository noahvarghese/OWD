<!DOCTYPE html>
<html>

<head>
    <title><?= ucwords($results["title"]) ?></title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="<?= STYLE_PATH . $results["css"] . ".css" ?>" />
    <link rel="stylesheet" href="<?= STYLE_PATH . "nav.css" ?>" />
    <link rel="stylesheet" href="<?= STYLE_PATH . "admin.css" ?>" />
    <link rel="icon" type="image/x-icon" href="<?= IMG_PATH . "favicon.ico" ?>" />
    <script type="text/javascript" src="<?= JS_PATH . $action . ".js" ?>"></script>
    <script type="text/javascript" src="<?= JS_PATH . "admin.js" ?>"></script>
</head>

<body>
    <nav>
        <img src="<?= IMG_PATH . "logo.png" ?>" alt="logo" id="logo" />
        <ul id="nav">
            <li><a href="index.php?action=home" class="<?= strtolower($results["title"]) == 'home' ? 'selected' : '' ?>">HOME</a></li>
            <li><a href="index.php?action=services" class="<?= strtolower($results["title"]) == 'services' ? 'selected' : '' ?>">SERVICES</a></li>
            <li><a href="index.php?action=contact" class="<?= strtolower($results["title"]) == 'contact' ? 'selected' : '' ?>">CONTACT</a></li>
            <li><a href="index.php?action=gallery" class="<?= strtolower($results["title"]) == ('gallery' || 'add image') ? 'selected' : '' ?>">GALLERY</a></li>
            <li><a href="index.php?action=blog" class="<?= strtolower($results["title"]) == ('blog' || 'add post') ? 'selected' : '' ?>">BLOG</a></li>
            <li><a href="index.php?action=comments" class="<?= strtolower($results["title"]) == 'comments' ? 'selected' : '' ?>">COMMENTS</a></li>
        </ul>
        <p id="copyright">&#169 N<sup>2</sup> Designs</p>
    </nav>
    <div id="main">