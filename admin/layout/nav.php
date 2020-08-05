<?php $title = strtolower($results["title"]); ?>

<!DOCTYPE html>
<html>

<head>
    <title><?= ucwords($title) ?></title>
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
            <li>
                <a href="index.php?action=home" class="<?php

                if ( $title == 'home' ) {
                    echo 'selected';
                } 
                else {
                    echo '';
                } 

                ?>">HOME</a>
            </li>
            <li>
                <a href="index.php?action=services" class="<?php

                if ( $title == 'services' ) {
                    echo 'selected';
                } 
                else {
                    echo '';
                } 

                ?>">SERVICES</a>
            </li>
            <li>
                <a href="index.php?action=contact" class="<?php
                
                if ( $title == 'contact' ) {
                    echo 'selected';
                } 
                else {
                    echo '';
                } 
                
                ?>">CONTACT</a>
            </li>
            <li>
                <a href="index.php?action=gallery" class="<?php

                if ( $title == 'gallery' || $title == 'add image' ) {
                    echo 'selected';
                } 
                else {
                    echo '';
                } 

                ?>">GALLERY</a>
            <li>
                <a href="index.php?action=blog" class="<?php
                
                if ( $title == 'blog' || $title == 'add post' ) {
                    echo 'selected';
                } 
                else {
                    echo '';
                } 
                
                ?>">BLOG</a>
            </li>
            <li>
                <a href="index.php?action=comments" class="<?php
                
                if ( $title == 'comments' ) {
                    echo 'selected';
                } 
                else {
                    echo '';
                } 
                
                ?>">COMMENTS</a>
            </li>
        </ul>
        <p id="copyright">&#169 N<sup>2</sup> Designs</p>
    </nav>
    <div id="main">