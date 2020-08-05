<?php

require_once("./util/Functions.php");
require_once("./util/SQLAccess.php");

if ( $_SERVER["REQUEST_METHOD"] === "POST" )
{
    $tag = null;

    $header = Functions::getAuthorizationHeader();

    if ( Functions::verifyHeader($header) )
    {
        if ( isset($_POST["image"]) ) {
            

        }
    }
}
http_response_code(400);
return;
