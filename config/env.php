<?php

class Assets
{
    public static $assetFolder = '../assets/';
    public static $layoutFolder = '../layout/';
    
    public static function imageAssets($file)
    {
        return Assets::$assetFolder . 'img/' . $file;
    }

    public static function fontAssets($file)
    {
        return Assets::$assetFolder . 'fonts/' . $file;
    }
    
    public static function jsAssets($file)
    {
        return Assets::$assetFolder . 'js/' . $file;
    }

    public static function styleAssets($file)
    {
        return Assets::$assetFolder . 'css/' . $file;
    }

    public static function nav()
    {
        return Assets::$layoutFolder . 'nav.php';
    }

    public static function footer()
    {
        return Assets::$layoutFolder . 'footer.php';
    }
}