<!DOCTYPE html>
<html>
    <head>
        <title><?= ucfirst($action) ?></title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "admin.css"?>" />
        <link rel="stylesheet" href="<?= STYLE_PATH . "login.css"?>" />
        <link rel="icon" type="image/x-icon" href="<?= IMG_PATH . "favicon.ico"?>"/>
        <script type="text/javascript" src="<?= JS_PATH . "admin.js"?>"></script>    
    </head>
    <body>
        <form autocomplete="on" method="POST" action="">
            <div>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"/>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password"/>
            </div>
            <input type="submit" value="Login"/>
        </form>
    </body>
</html>