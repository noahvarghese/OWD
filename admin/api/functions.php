<?php

function getAuthorizationHeader() {
    $headers = null;

    if (isset($_SERVER["Authorization"])) {
        $headers = trim($_SERVER["Authorization"]);
    } else if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $headers = trim($_SERVER["HTTP_AUTHORIZATION"]);
    } else if (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        // Server-side fix for bug in old Android versions (a nice side-effect of this fix means we don't care about capitalization for Authorization)
        $requestHeaders = array_combine(array_map('ucwords', array_keys($requestHeaders)), array_values($requestHeaders));

        if (isset($requestHeaders['Authorization'])) {
            $headers = trim($requestHeaders['Authorization']);
        }
    }

    return $headers;
}

function verifyHeader($headers) {

}

function decrypt($string) {

    $fields = [
        'crypt' => 'decrypt',
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