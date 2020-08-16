<?php

class BlogController implements IController
{
    private array $TPL = [];
    private string $title = "Blog";
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
                $this->assetsName = "adminBlog";
                $this->title = "Blog";
            }
            else
            {
                // This iwll make sure if the amdin is not logged in they will be directed back to the login page
                $this->assetsName = "adminLogin";
                $this->title = "Login";
            }
        }
        else
        {
            $this->title = "Blog";
            $this->assetsName = "blog";
        }

        $this->TPL["action"] = $this->title;
        $this->TPL["title"] = $this->title;
        $this->TPL["assetsName"] = $this->assetsName;
        
        new View($this->TPL, $this->admin);
    }
}

?>