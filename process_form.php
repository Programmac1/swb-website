<?php
$to = "appledan616@gmail.com";
$subject = "New Client Enquiry";

$company = $_POST['company'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$headers = "From: $email";

mail($to, $subject, $message, $company, $headers);

// Redirect to a thank-you page
header("Location: thank_you.html");
exit();
?>