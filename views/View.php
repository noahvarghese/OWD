<?php

class View
{
    public function __construct (array $TPL, bool $admin = false )
    {
        if ( $admin === true )
        {
            Functions::includeLayout("adminNav", $TPL);
        }
        else
        {
            Functions::includeLayout("nav", $TPL);
        }

        Functions::includePage($TPL["assetsName"], $TPL);

        if ( $admin === true ) 
        {
            Functions::includeLayout("adminFooter", $TPL);
        }
        else
        {
            Functions::includeLayout("footer", $TPL);
        }
    }
}

?>