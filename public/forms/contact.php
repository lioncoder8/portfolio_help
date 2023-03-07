<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

  require '../assets/vender/src/Exception.php';
  require '../assets/vender/src/PHPMailer.php';
  require '../assets/vender/src/SMTP.php';

  // Include autoload.php file
  // require 'vendor/autoload.php';
  // Create object of PHPMailer class
  $mail = new PHPMailer(true);

  $output = '';

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    try {
      $mail->isSMTP();
      $mail->Host = 'smtp.gmail.com';
      $mail->SMTPAuth = true;
      // Gmail ID which you want to use as SMTP server
      $mail->Username = 'smooth55dev@gmail.com';
      // Gmail Password
      $mail->Password = 'Qwe&*(789)';
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
      $mail->Port = 2525;

      // Email ID from which you want to send the email
      $mail->setFrom($email);
      // Recipient Email ID where you want to receive emails
      $mail->addAddress('smooth55dev@gmail.com');

      $mail->isHTML(true);
      $mail->Subject = $subject;
      $mail->Body = $message;

      $mail->send();
    } catch (Exception $e) {
      print($e->getMessage());
    }

?>