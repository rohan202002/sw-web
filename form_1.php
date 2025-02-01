<?php
if (isset($_POST['submit'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile = htmlspecialchars($_POST['mobile']);
    $occupation = htmlspecialchars($_POST['occupation']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "surverohan786@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";
    
    $body = "
        <html>
        <head>
            <title>Contact Form Submission</title>
        </head>
        <body>
            <h2>Contact Form Details</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mobile:</strong> $mobile</p>
            <p><strong>Occupation:</strong> $occupation</p>
            <p><strong>Message:</strong><br>$message</p>
        </body>
        </html>
    ";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Information sent successfully.";
    } else {
        echo "Failed to send information.";
    }
} else {
    echo "Invalid form submission.";
}
?>
