<?php

ini_set("display_errors", true);
date_default_timezone_set("America/Toronto");

require_once("./util/Loader.php");

session_start();

Loader::registerAutoload();
$route = new Route(new Request());

$route->get('/blog/', function($request) {
    return Functions::view(new BlogController());
});


$route->get('/testimonials/', function($request) {
    return Functions::view(new TestimonialsController());
});

$route->get('/contact/', function($request) {
    return Functions::view(new ContactController());
});

$route->get('/services/', function($request) {
    return Functions::view(new ServicesController());
});

// Admin routing 

$route->get('/admin/', function ($request) {
    return Functions::view(new HomeController());
});


// Template routing
$route->get('/', function($request) {
    return Functions::view(new HomeController());
});