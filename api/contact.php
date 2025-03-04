<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer
require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

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

    // SMTP Configuration
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->Username   = 'lookaround.photo@gmail.com'; // Change this
        $mail->Password   = 'baqe mlzk oeqf gfne'; // Change this
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

        // Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress('lookaround.photo@gmail.com'); // Change to your receiving email
        $mail->addReplyTo($email, $name);

        // Email content
        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "Name: $name\nEmail: $email\nMessage:\n$message";

        // Send email
        $mail->send();

        echo json_encode(["status" => "success", "message" => "Your message has been sent!"]);
    } catch (Exception $e) {
        echo json_encode(["status" => "error", "message" => "Error sending email: " . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>
