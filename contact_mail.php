<?php
// Get data from form  
$name = $_POST['userName'];
$email= $_POST['userEmail'];
$message= $_POST['subject'];

$to = "lookaround.photo@gmail.com";
$subject = "This is the subject line";

// The following text will be sent
// Name = user entered name
// Email = user entered email
// Message = user entered message 
$txt ="Name = ". $name . "\r\n  Email = " 
    . $email . "\r\n Message =" . $message;

$headers = "From: lookaround.photo@gmail.com";
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}

// Redirect to
// header("Location:last.html");
?>