<?php

require_once("./util/Functions.php");
require_once("./util/SQLAccess.php");


if ( $_SERVER["REQUEST_METHOD"] === "POST" )
{
    $tag = null;

    $header = Functions::getAuthorizationHeader();

    if ( Functions::verifyHeader($header) )
    {
        if ( isset($_POST["tag"]) ) {
            $tag = new Tag();
            $tag->tag = filter_var(trim(htmlspecialchars($_POST["tag"]), FILTER_SANITIZE_STRING));
            if ( sqlAccess::upsert($tag) ) {
                http_response_code(200);
                return;
            }
            else {
                http_response_code(500);
                return;
            }
        }
    }
}
http_response_code(400);
return;
