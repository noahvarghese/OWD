<?php require_once('../config/env.php') ?>

<!DOCTYPE html>
<html>

<head>
    <title>Testimonials</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="<?= Assets::styleAssets('testimonials.css') ?>" />
    <link rel="stylesheet" href="<?= Assets::styleAssets('nav.css') ?>" />
    <link rel="stylesheet" href="<?= Assets::styleAssets('footer.css') ?>" />
    <script type="text/javascript" src="<?= Assets::jsAssets('services.js') ?>"></script>
</head>

<body>
    <div id="main">
        <?php include(Assets::nav()) ?>
        <h1>TESTIMONIALS</h1>
        <h2 id="blurb">
            Find out first-hand why our customers love<br />
            working with Oakville Windows & Doors!
        </h2>
        <div id="testimonials">
            <div class="individual">
                <div class="quote">
                    <img />
                </div>
                <div class="from">
                    <h3></h3>
                    <h3></h3>
                    <hr />
                </div>
                <div class="text">
                    <h4></h4>
                    <p></p>
                </div>
            </div>
        </div>
        <?php include(Assets::footer()) ?>