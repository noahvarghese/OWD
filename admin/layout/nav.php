<!DOCTYPE html>
<html>

<head>
    <title><?= ucfirst($results["title"]) ?></title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="<?= STYLE_PATH . "nav.css" ?>" />
    <link rel="stylesheet" href="<?= STYLE_PATH . "admin.css" ?>" />
    <link rel="stylesheet" href="<?= STYLE_PATH . $results["css"] . ".css" ?>" />
    <link rel="icon" type="image/x-icon" href="<?= IMG_PATH . "favicon.ico" ?>" />
    <script type="text/javascript" src="<?= JS_PATH . $action . ".js" ?>"></script>
    <script type="text/javascript" src="<?= JS_PATH . "admin.js" ?>"></script>
</head>

<body>
    <?php
    if (isset($_SESSION["username"])) {
    ?>

        <nav>
            <img src="<?= IMG_PATH . "logo.png" ?>" alt="logo" id="logo" />
            <ul id="nav">
                <li><a href="index.php?action=home" class="<?= $results["title"] == 'home' ? 'selected' : '' ?>">HOME</a></li>
                <li><a href="index.php?action=services" class="<?= $results["title"] == 'services' ? 'selected' : '' ?>">SERVICES</a></li>
                <li><a href="index.php?action=contact" class="<?= $results["title"] == 'contact' ? 'selected' : '' ?>">CONTACT</a></li>
                <li><a href="index.php?action=gallery" class="<?= $results["title"] == 'gallery' ? 'selected' : '' ?>">GALLERY</a></li>
                <li><a href="index.php?action=blog" class="<?= $results["title"] == 'blog' ? 'selected' : '' ?>">BLOG</a></li>
                <li><a href="index.php?action=comments" class="<?= $results["title"] == 'comments' ? 'selected' : '' ?>">COMMENTS</a></li>
            </ul>
            <p id="copyright">&#169 N<sup>2</sup> Designs</p>
        </nav>
    <?php
    }
    ?>
    <div id="main">