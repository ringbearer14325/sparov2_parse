<?php

require "src\components\keys.php";
use Parse\ParseException;
use Parse\ParseUser;

class Login {
public $user = new ParseUser();

public function __construct() {
  global $db;

  session_start();

  $this->db = $db;

}

public function verify_login($post) {



}


public  function verify_session() {



}

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

}


  
?>