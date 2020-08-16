<?php

class HomeController implements IController
{
    private array $TPL = [];
    private string $title = "Home";
    private bool $admin = false;
    private string $assetsName = "";

    public function __construct(bool $admin = false)
    {
        $this->admin = $admin;
    }

    public function view() : void
    {
        if ( $this->admin )
        {
            // check authorization token
            if ( $auth = true )
            {
                $this->assetsName = "adminHome";
                $this->title = "Home";
            }
            else
            {
                $this->assetsName = "adminLogin";
                $this->title = "Login";
            }
        }
        else
        {
            $this->title = "Home";
            $this->assetsName = "home";
        }

        $this->TPL["action"] = $this->title;
        $this->TPL["title"] = $this->title;
        $this->TPL["assetsName"] = $this->assetsName;
        
        new View($this->TPL, $this->admin);
    }
}

?>