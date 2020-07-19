<?php

if ( $_SERVER['REQUEST_METHOD'] === "POST" )
{
    $fname = filter_var(strip_tags($_POST['fname']), FILTER_SANITIZE_STRING);
    $lname = filter_var(strip_tags($_POST['lname']), FILTER_SANITIZE_STRING);
    $email = filter_var(strip_tags($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(strip_tags($_POST['phone']), FILTER_SANITIZE_STRING);
    $city = filter_var(strip_tags($_POST['city']), FILTER_SANITIZE_STRING);
    $message = filter_var(strip_tags($_POST['message']), FILTER_SANITIZE_STRING);

    $items = $_POST['items'];

    $required = array($fname, $lname, $email, $phone, $city, $message);

    $valid = true;

    foreach ( $required as $item )
    {
        $str = isset($item) ? trim($item) : false;
        
        if ( empty($str) === true )
            $valid = false;
    }

    if ( $valid )
    {
        $phoneRegex = "/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/";

        if ( preg_match($phoneRegex, $phone) !== 1 )
            $valid = false;

        $emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

        if ( preg_match($emailRegex, $email) !== 1 )
            $valid = false;
    }

    if ( $valid )
    {

        $message = "<html><body>";

        $businessContent = "<p>Hi there,<br /><br />We Just received a new quote request from your website.<br />Find the information below.</p>";

        $senderContent = "<p>Hi $fname, <br/><br/>We're glad that you have contacted us!<br/><br/>We have received your inquiry, and a member of our team will reach out to you shortly.<br /><br />Here is the information you have submitted for your records.</p>";

        $content = "<table>
                        <tr><th>Name</th></tr>
                        <tr><td>$fname $lname</td></tr>
                        <tr><th>Phone</th></tr>
                        <tr><td>$phone</td></tr>
                        <tr><th>Email</th></tr>
                        <tr><td>$email</td></tr>
                        <tr><th>City</th></tr>
                        <tr><td>$city</td></tr>
                        <tr><th>Products of Interest</th></tr>
                        <tr>
                            <td><ul>";
        
        foreach ( $items as $item )
        {
            $content .= "<li>$item</li>";
        }

        $content .= "</ul></td></tr>";

        $content .= "<tr>
                        <th>Comments</th>
                    </tr>
                    <tr>
                        <td>$message</td>
                    </tr>
                    </table>
                    </body>
                    </html>";

        $businessHeaders[] = "MIME-Version: 1.0";
        $businessHeaders[] = "Content-type: text/html; charset=iso-8859-1";
        $businessHeaders[] = "To: Oakville Windows And Doors <$businessEmail>";
        $businessHeaders[] = "From: Website <varghese.noah@gmail.com";

        $businessEmail = "sales@oakvillewindows.com";

        $businessSubject = "Quote request from $fname $lname";
        $businessMessage = $message;
        $businessMessage .= $businessDetails['message'];
        $businessMessage .= $content;

        mail($businessEmail, $businessDetails['subject'], $businessMessage, implode("\r\n", $businessHeaders));

        $senderHeaders[] = "MIME-Version: 1.0";
        $senderHeaders[] = "Content-type: text/html; charset=iso-8859-1";
        $senderHeaders[] = "To: $fname $lname <$email>";
        $senderHeaders[] = "From: Oakville Windows And Doors <$businessEmail>";

        $senderSubject = "Thank you for your quote request!";
        $senderMessage = $message;
        $senderMessage .= $senderDetails['message'];
        $senderMessage .= $content;

        mail($email, $senderDetails['subject'], $senderMessage, implode("\r\n", $senderHeaders));

        http_response_code(200);
        return;
    }
}

http_response_code(400);
return;
