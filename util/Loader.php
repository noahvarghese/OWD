<?php

class Loader
{

    private static string $projectDir = "/var/www/html/";
    //private static string $projectDir = "/srv/http/OWD/";
    private static string $classDir;
    private static string $class;
    private static string $PATH_SEPARATOR = '/';
    private static string $ext = ".php";

    public static function registerAutoload(string $directory = null) : bool
    {
        $dir = Loader::$projectDir;

        if ( is_null($directory) === false )
            $dir = $directory;
        
        set_include_path($dir);
        spl_autoload_extensions(".php");
        return spl_autoload_register([__CLASS__, "includeClass"]);
    }

    private static function includeClass(string $class, string $dir = null) : void
    {
        try
        {
            if ( is_null( $dir ) )
                $dir = Loader::$projectDir;

            foreach (scandir($dir) as $file) {

                // directory?
                if (is_dir($dir . $file) && substr($file, 0, 1) !== '.')
                    Loader::includeClass($class, $dir . $file . '/');

                // php file?
                if (substr($file, 0, 2) !== '._' && preg_match("/.php$/i", $file)) 
                {

                    // filename matches class?
                    if (str_replace('.php', '', $file) == $class || str_replace('.class.php', '', $file) == $class) {

                        require_once( $dir . $file);
                    }
                }
            }
        }
        catch ( Exception $e )
        {
            echo "Error including " . get_include_path() . $class . Loader::$ext;
            die;
        }
    }

    public static function unregisterAutoload() : bool
    {
        return spl_autoload_unregister([__CLASS__, "includeClass"]);
    }
}