<?php

if(isset($_POST['email'])) {



    $email_to = "hello@smartheads.com.pk";

    $email_subject = "Query from Website";





    function died($error) {

        // your error code can go here

        echo "We are very sorry, but there were error(s) found with the form you submitted. ";

        echo "These errors appear below.<br /><br />";

        echo $error."<br /><br />";

        echo "Please go back and fix these errors.<br /><br />";

        die();

    }



    // validation expected data exists

    if(!isset($_POST['name']) ||

        !isset($_POST['email']) ||

        !isset($_POST['message'])) {

        died('We are sorry, but there appears to be a problem with the form you submitted.');

    }



    $first_name = $_POST['name']; // required

    $last_name = $_POST['email']; // required

    $email_from = $_POST['message']; // required




    $error_message = "";

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if(!preg_match($email_exp,$last_name)) {

        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';

    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if(!preg_match($string_exp,$first_name)) {

        $error_message .= 'The Name you entered does not appear to be valid.<br />';

    }



    if(strlen($email_from) < 2) {

        $error_message .= 'The Comments you entered do not appear to be valid.<br />';

    }

    if(strlen($error_message) > 0) {

        died($error_message);

    }

    $email_message = "Form details below.\n\n";



    function clean_string($string) {

        $bad = array("content-type","bcc:","to:","cc:","href");

        return str_replace($bad,"",$string);

    }



    $email_message .= "First Name: ".clean_string($first_name)."\n";

    $email_message .= "Email: ".clean_string($last_name)."\n";

    $email_message .= "Message: ".clean_string($email_from)."\n";





// create email headers

    $headers = 'From: '.$last_name."\r\n".

        'Reply-To: '.$last_name."\r\n" .

        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);

    ?>







    Thank You! Your message has been sent.



<?php

}

?>