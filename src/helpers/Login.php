<?php

use Parse\ParseException;
use Parse\ParseUser;

// add headers variables
$url = "https://parseapi.back4app.com/login";
$applicationId = "X-Parse-Application-Id: BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f";
$REST_API_KEY = "X-Parse-REST-API-Key: swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w";
$body = "src\components\loginUser.json";



// post method for headers
if (empty($_GET[$applicationId]) && empty($_GET([$REST_API_KEY]))) die();

if (isset($_GET[$applicationId]) && isset($_GET([$REST_API_KEY]))) {
  // data
  $subject = $_POST($user);
  $to = $_POST($url, $body);

  echo $subject;
  echo $to;
try {
    $user = ParseUser::logIn("myname", "mypass");
    // Do stuff after successful login.
  } catch (ParseException $error) {
    // The login failed. Check error to see why.
  }
}


  
?>