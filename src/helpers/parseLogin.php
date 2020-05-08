<?php
use Parse\ParseException;
use Parse\ParseUser;
require "src\components\keys.php";

// add headers variables
$url = "https://parseapi.back4app.com/login";
$body = "src\components\loginUser.json";



// post method for headers
if (isset($_GET[$applicationId]) && isset($_GET([$REST_API_KEY]))) {
  // data
  $subject = $_POST($user);
  $to = $_POST($url, $body);


try {
    $user = ParseUser::logIn("myname", "mypass");
    // Do stuff after successful login.
  } catch (ParseException $error) {
    // The login failed. Check error to see why.
  }
}


  
?>