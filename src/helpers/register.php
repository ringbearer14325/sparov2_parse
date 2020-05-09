<?php 
use Parse\ParseException;
use Parse\ParseUser;
require "src\components\keys.php";
require_once("load.php");

// handle registration
if($SERVER["request_method"] == "post") {
    $register_status = $login->register($_POST);
}

?>



<?php
// add headers variables
$url = "https://parseapi.back4app.com/users";
$body = "src\components\user.json";


// construct message object
$user = new ParseUser();
$user->set("username", "my name");
$user->set("password", "my pass");
$user->set("email", "email@example.com");

// check the register status
if (isset( $register_status ) ) : 
    ($register_status['status'] == true ? $class = 'success' : $class = 'error'); 

// post method for headers
if (isset($_POST[$applicationId]) && isset($_POST([$REST_API_KEY]))) {
  // data
  $subject = $_POST($user);
  $to = $_POST($url, $body);


try {
  $user->signUp();
  // Hooray! Let them use the app now.
   } catch (ParseException $ex) {
  // Show the error message somewhere and let the user try again.
  echo "Error: " . $ex->getCode() . " " . $ex->getMessage();
   }

}
?>
