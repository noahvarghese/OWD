<?php

require_once("./util/functions.php");
require_once("./util/sql.php");


if ( $_SERVER["REQUEST_METHOD"] === "POST" )
{
    $tag = null;

    $header = getAuthorizationHeader();

    if ( verifyHeader($header) )
    {
        if ( isset($_POST["tag"]) ) {
            $tag = new Tag();
            $tag->tag = filter_var(trim(htmlspecialchars($_POST["tag"]), FILTER_SANITIZE_STRING));
            sqlAccess::upsert($tag);
        }
    }
}
http_response_code(400);
