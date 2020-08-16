<?php

class TestimonialsController implements IController
{
    private array $TPL = [];
    private string $title = "Testimonials";
    private bool $admin = false;
    private string $assetsName = "testimonials";

    public function __construct(bool $admin = false)
    {
        $this->admin = $admin;
    }

    public function view() : void
    {

        $this->TPL["action"] = $this->title;
        $this->TPL["title"] = $this->title;
        $this->TPL["assetsName"] = $this->assetsName;
        
        new View($this->TPL, $this->admin);
    }
}

?>