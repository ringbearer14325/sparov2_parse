<?php 
use Parse\ParseException;
use Parse\ParseUser;
require_once "src\helpers\helper.php";


class Register {
  
  
  function register($user) {
    
    // construct message object
    $user = new ParseUser();
    $user->set("username", "my name");
    $user->set("password", "my pass");
    $user->set("email", "email@example.com");

  // post method for headers
  $body = "src\components\user.json";
  $url = "https://parseapi.back4app.com/user";
  $keys = array(
    'application_id' => "X-Parse-Application-Id: BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f",
    'REST_API_KEY' => "X-Parse-REST-API-Key: swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w",
  );

  if (isset($_POST($url, $keys, $body) ) ) {
      //try and POST the variables with the keys and the body
try {
  $user->signUp();
  // Hooray! Let them use the app now.
   } catch (ParseException $ex) {
  // Show the error message somewhere and let the user try again.
  echo "Error: " . $ex->getCode() . " " . $ex->getMessage();
   }
    $json = file_get_contents($user, false, null);
    $fp = fopen("user.json", 'r');
    fwrite($fp, json_encode($json));
    fclose($fp);
  }

 }

}


?>

