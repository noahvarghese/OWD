<?php

class Assets
{
    private $assetFolder = '../assets/';
    
    public static function imageAssets()
    {
        return Assets::$assetFolder . '/img/';
    }

    public static function fontAssets()
    {
        return Assets::$assetFolder . '/fonts/';
    }
    
    public static function jsAssets()
    {
        return Assets::$assetFolder . '/js/';
    }

    public static function styleAssets()
    {
        return Assets::$assetFolder . '/css/';
    }
}