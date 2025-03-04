<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Check for POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST["name"]) ? trim($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? trim($_POST["email"]) : "";
    $message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }

    // Email recipient
    $to = "lookaround.photo@gmail.com"; // Change this to your email
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    $email_body = "Name: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $email_body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Your message has been sent!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error sending email."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
