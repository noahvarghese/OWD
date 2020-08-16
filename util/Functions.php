<?php

class Functions 
{
    
    public const ENCRYPT = 1;
    public const DECRYPT = 0;

    public static function view(IController $controller) : void
    {
        new $controller();
        $controller->view();
    }

    public static function includeLayout(string $file, array $TPL) : void
    {
        include_once(Config::$LAYOUT_PATH . $file . Config::$VIEW_EXT);
    }

    public static function includePage(string $file, array $TPL) : void
    {
        include_once(Config::$PAGE_PATH . $file . Config::$VIEW_EXT);
    }

    public static function getAuthorizationHeader() : string 
    {
        $headers = null;
    
        if (isset($_SERVER["Authorization"])) 
        {
            $headers = trim($_SERVER["Authorization"]);
        } 
        else if (isset($_SERVER['HTTP_AUTHORIZATION'])) 
        {
            $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
        } 
        else if (function_exists('apache_request_headers')) 
        {
            $requestHeaders = apache_request_headers();
            // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
            $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));
    
            if (isset($requestHeaders['Authorization'])) {
                $headers = trim($requestHeaders['Authorization']);
            }
        }
    
        return $headers;
    }
    
    public static function verifyHeader($headers) : bool 
    {
        return true;
    }
    
    public static function crypt(string $string, int $crypt) : string 
    {

        $encryption = $crypt == Functions::ENCRYPT ? "encrypt" : "decrypt";
    
        $fields = [
            'crypt' => $encryption,
            'string' => $string
        ];
    
        $postvars='';
        $sep='';
        foreach($fields as $key=>$value)
        {
                $postvars.= $sep.urlencode($key).'='.urlencode($value);
                $sep='&';
        }
        
        $ch = curl_init();
        
        curl_setopt($ch,CURLOPT_URL, "tools.nvarghese.com/cryptoTool/index.php");
        curl_setopt($ch,CURLOPT_POST,count($fields));
        curl_setopt($ch,CURLOPT_POSTFIELDS,$postvars);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        
        $result = curl_exec($ch);
        
        curl_close($ch);
    
        return $result["result"];
    }
}

