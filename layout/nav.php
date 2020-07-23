<body>
    <div id="main">
        <nav>
            <img src="<?= Assets::imageAssets('logo.png') ?>" alt="logo" id="logo" />
            <ul id="nav">
                <li><a href="../pages/about.php" class="<?= $action == 'about' ? 'selected' : ''?>">ABOUT</a></li>
                <li><a href="../pages/services.php" class="<?= $action == 'services' ? 'selected' : ''?>">SERVICES</a></li>
                <li><a href="../pages/contact.php" class="<?= $action == 'contact' ? 'selected' : ''?>">CONTACT</a></li>
                <li><a href="#" class="<?= $action == 'commercial' ? 'selected' : ''?>">COMMERCIAL</a></li>
                <li><a href="#" class="<?= $action == 'gallery' ? 'selected' : ''?>">GALLERY</a></li>
                <li><a href="#" class="<?= $action == 'blogs' ? 'selected' : ''?>">BLOGS</a></li>
                <li><a href="../pages/testimonials.php" class="<?= $action == 'testimonials' ? 'selected' : ''?>">TESTIMONIALS</a></li>
            </ul>
        </nav>