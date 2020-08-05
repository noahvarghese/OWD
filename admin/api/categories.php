<?php

require_once("./util/functions.php");
require_once("./util/sql.php");


if ( $_SERVER["REQUEST_METHOD"] === "POST" )
{
    $tag = null;

    $header = Functions::getAuthorizationHeader();

    if ( Functions::verifyHeader($header) )
    {
        if ( isset($_POST["category"]) ) {
            $category = new Category();
            $category->category = filter_var(trim(htmlspecialchars($_POST["category"]), FILTER_SANITIZE_STRING));

            if ( sqlAccess::upsert($category) ) {
                http_response_code(200);
            }
            else {
                http_response_code(500);
            }
        }
    }
}
http_response_code(400);
