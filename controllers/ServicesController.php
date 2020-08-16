<?php

class ServicesController implements IController
{
    private array $TPL = [];
    private string $title = "Services";
    private bool $admin = false;
    private string $assetsName = "services";

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