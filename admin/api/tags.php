<?php

include("functions.php");
include("db.php");


if ( $_SERVER["REQUEST_METHOD"] === "POST" )
{
    $tag = null;

    if ( isset($_POST["tag"]) ) {
        $tag = filter_var(trim(htmlspecialchars($_POST["tag"]), FILTER_SANITIZE_STRING));
    }
}
http_response_code(400);
