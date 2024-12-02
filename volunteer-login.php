<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "info@swadhey.org";
   // $email_to = "companysharptech@gmail.com";
    $email_subject = "Request Quote from Swadhey Volunteer Login Form";
 
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
        !isset($_POST['mobile']) ||
        !isset($_POST['email']) ||
        !isset($_POST['addharno']) ||
        !isset($_POST['dob']) ||
        !isset($_POST['address']) ||
        //!isset($_POST['yourself']) ||
        !isset($_POST['yourself'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $first_name = $_POST['name']; // required
    $mobile = $_POST['mobile']; // required
    $email_from = $_POST['email']; // required
    $addharno = $_POST['addharno']; // not required
    $dob = $_POST['dob']; // not required
    $address = $_POST['address']; // required
    $yourself = $_POST['yourself']; // required
    //$yourself = $_POST['availableTime']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = '/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/';
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }

  $aadhar_exp = '/^[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}$/';
 
  if(!preg_match($aadhar_exp,$addharno)) {
    $error_message .= 'The PAN card no. you entered does not appear to be valid.<br />';
  }

  $mobile_exp = '/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/';

  if(!preg_match($mobile_exp,$mobile)) {
    $error_message .= 'The mobile you entered does not appear to be valid.<br />';
  }
 
  if(strlen($address) < 2) {
    $error_message .= 'The address you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
   // $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
	$email_message = '<html><body>';
	$email_message .= '<table rules="all" border="1" style="border-color: #666;" cellpadding="10">';
	$email_message .= "<tr><td colspan='2' style='background: #f7ce36; color:#fff;text-align:center;'><strong>Swadhey Volunteer Details</strong> </td></tr>";
	$email_message .= "<tr><td style='background: #f1f1f1;'><strong>Name:</strong> </td><td style='background: #f1f1f1;'>" .clean_string($first_name). "</td></tr>";
	//$email_message .= "<tr><td style='background: #eee;'><strong>Last Name:</strong> </td><td>" .clean_string($last_name). "</td></tr>";
	$email_message .= "<tr><td style='background: #f1f1f1;'><strong>Email:</strong> </td><td style='background: #f1f1f1;'>" .clean_string($email_from). "</td></tr>";
	$email_message .= "<tr><td style='background: #f1f1f1;'><strong>Phone:</strong> </td><td style='background: #f1f1f1;'>" .clean_string($mobile). "</td></tr>";
  $email_message .= "<tr><td style='background: #f1f1f1;'><strong>PAN No.:</strong> </td><td style='background: #f1f1f1;'>" .clean_string($addharno). "</td></tr>";
  $email_message .= "<tr><td style='background: #f1f1f1;'><strong>DOB:</strong> </td><td style='background: #f1f1f1;'>" .clean_string($dob). "</td></tr>";
	$email_message .= "<tr><td style='background: #f1f1f1;'><strong>Address:</strong> </td><td style='background: #f1f1f1;'>" .clean_string($address). "</td></tr>";
  $email_message .= "<tr><td style='background: #f1f1f1;'><strong>About Volunteer:</strong> </td><td style='background: #f1f1f1;'>" .clean_string($yourself). "</td></tr>";
	$email_message .= "</table>";
	$email_message .= "<hr><p><em>Above Mail was send from Swadhey Official Website</em></p>";
	$email_message .= "</body></html>";
 
// create email headers
$headers = 'From: '.$email_from."\r\n". 'Reply-To: '.$email_from."\r\n" . 'X-Mailer: PHP/' . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
<?php
echo "<script>alert('Mail Sent Successfully, Thanks for Reaching Us, Will get back to you Shortly');document.location='https://swadhey.org/Thankyou-Loginform.html'</script>";
?>

 
<?php
 
}
?>