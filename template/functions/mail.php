<?php

if ( $_SERVER['REQUEST_METHOD'] === "POST" )
{
    $fname = filter_var(strip_tags($_POST['fname']), FILTER_SANITIZE_STRING);
    $lname = filter_var(strip_tags($_POST['lname']), FILTER_SANITIZE_STRING);
    $email = filter_var(strip_tags($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(strip_tags($_POST['phone']), FILTER_SANITIZE_STRING);
    $city = filter_var(strip_tags($_POST['city']), FILTER_SANITIZE_STRING);
    $message = filter_var(strip_tags($_POST['message']), FILTER_SANITIZE_STRING);

    $products = [
        ["windows", "Windows"],
        ["entry", "Entry Door Systems"],
        ["sliding", "Sliding Patio Doors"],
        ["garage", "Garage Doors"],
        ["porch", "Porch Enclosures"],
        ["egress", "Egress Windows"],
        ["other", "Other"]
    ];

    $items = array();

    foreach ( $products as $item )
    {
        if ( isset($_POST[$item[0]]) )
        {
            $items[] = $item[1];
        }
    }

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

        $businessContent = "<p>Hi there,<br /><br />We Just received a new quote request from your website. Find the information below.</p><br/><br/>";

        $senderContent = "<p>Hi $fname, <br/><br/>We're glad that you have contacted us!<br/><br/>We have received your inquiry, and a member of our team will reach out to you shortly.<br /><br />Here is the information you have submitted for your records.</p><br/><br/>";

        $content = "<table width=\"99%\" border=\"0\" cellpadding=\"1\" cellspacing=\"0\" bgcolor=\"#EAEAEA\">
                        <tbody>
                            <tr>
                                <td>
                                    <table width=\"100%\" border=\"0\" cellpadding=\"5\" cellspacing=\"0\" bgcolor=\"#FFFFFF\">
                                        <tbody>
                                        <tr bgcolor=\"#EAF2FA\">
                                            <td colspan=\"2\">
                                                <font style=\"font-family:sans-serif;font-size:12px\">
                                                    <strong>Name</strong>
                                                </font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#FFFFFF\">
                                            <td width=\"20\">&nbsp</td>
                                            <td>
                                                <font style=\"font-family:sans-serif;font-size:12px\">$fname $lname</font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#EAF2FA\">
                                            <td colspan=\"2\">
                                                <font style=\"font-family:sans-serif;font-size:12px\">
                                                    <strong>Phone</strong>
                                                </font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#FFFFFF\">
                                            <td width=\"20\">&nbsp</td>
                                            <td>
                                                <font style=\"font-family:sans-serif;font-size:12px\">$phone</font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#EAF2FA\">
                                            <td colspan=\"2\">
                                                <font style=\"font-family:sans-serif;font-size:12px\">
                                                    <strong>Email</strong>
                                                </font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#FFFFFF\">
                                            <td width=\"20\">&nbsp</td>
                                            <td>
                                                <font style=\"font-family:sans-serif;font-size:12px\">$email</font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#EAF2FA\">
                                            <td colspan=\"2\">
                                                <font style=\"font-family:sans-serif;font-size:12px\">
                                                    <strong>City</strong>
                                                </font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#FFFFFF\">
                                            <td width=\"20\">&nbsp</td>
                                            <td>
                                                <font style=\"font-family:sans-serif;font-size:12px\">$city</font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#EAF2FA\">
                                            <td colspan=\"2\">
                                                <font style=\"font-family:sans-serif;font-size:12px\">
                                                    <strong>Products of Interest</strong>
                                                </font>
                                            </td>
                                        </tr>
                                        <tr bgcolor=\"#FFFFFF\">
                                            <td>
                                                <font style=\"font-family:sans-serif;font-size:12px\">
                                                    <ul>";
        
        foreach ( $items as $item )
        {
            $content .= "<li>$item</li>";
        }

        $content .= "</ul></font></td></tr>";

        $content .= "<tr bgcolor=\"#EAF2FA\">
                        <td colspan=\"2\"><strong>Comments</strong></td>
                    </tr>
                    <tr bgcolor=\"#FFFFFF\">
                        <td>$message</td>
                    </tr>
                    </tbody>
                    </table>
                    </tbody>
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
