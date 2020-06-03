<?php

use Parse\ParseException;
use Parse\ParseUser;
require_once('src\helpers\load.php');


class Login {  
  public $user;

  public function __construct() {    
    global $users;
    session_start();
       
    $this->users = $users;
  }  
    
  public function verify_login($post) {
  if ( ! isset($post['username'] ) || ! isset($post['password'] ) ) {
    return false;
  }

    $url = "https://parseapi.back4app.com/login";
    $keys = array(
      "X-Parse-Application-Id" => "BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f",
      "X-Parse-REST-API-Key" => "swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w",
      "X-Parse-Revocable-Session" => "1"
    );
    $header = array("Content-Type" => "application/json");

    if( ! isset($_GET($url, $keys, $header) ) ) {
     //try and GET the variables with the keys and the body
    try {
      $user = ParseUser::logIn("username", "password");
      // password_verify checks for the password of the user
      if ( password_verify( $post['password'], $user->password ) ) 
        $_SESSION['username'] = $user->username;      
        return true;

        
      } catch (ParseException $ex) {
        echo "Error: " . $ex->getCode() . " " . $ex->getMessage();
        
        return false;
      }    
      
    } 

  }


public function verify_session() {
  $username = $_SESSION['username'];
  $user = $this->user_exists( $username );

  if ( false !== $user ) {
    $this->user = $user;
    
    return true;
  }

  return false;

}

public function register($post) {
  // check if username exists already
  if ( false !== $this->user_exists( $post['username'] ) ) {
    return array('status'=>0, 'message'=>'Username already exists');
  }

    //use ParseUser object and create new user
    $user = new ParseUser();
    $user->set("username", "my name");
    $user->set("password", "my pass");
    $user->set("email", "email@example.com");
  
    $body = "src\components\user.json";
    $url = "https://parseapi.back4app.com/users";
    $keys = array(
      "X-Parse-Application-Id" => "BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f",
      "X-Parse-REST-API-Key" => "swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w",
      "X-Parse-Revocable-Session" => "1"
    );
    $header = array("Content-Type" => "application/json");

    if (isset($post($url, $keys, $body, $header) ) )  {
      //try and POST the variables with the keys and the body
  try {
    $insert = $user->signUp();
    // user gets created in the server    

  } catch (ParseException $ex) {
    // Show the error message somewhere and let the user try again.
    echo "Error: " . $ex->getCode() . " " . $ex->getMessage();
  }

// show result of procedure in $insert variable
if ( $insert == true ) {
  return array('status'=>1, 'message'=>'Account created succesfully');
}

return array('status'=>0, 'message'=>'an unknown error ocurred');
    }
}  


private function user_exists($currentUser) {
    // declare the keys in variables
    $body = "src\components\user.json";
    $url = "https://parseapi.back4app.com/user/me";
    $keys = array(
      "X-Parse-Application-Id" => "BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f",
      "X-Parse-REST-API-Key" => "swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w",
      "X-Parse-Revocable-Session" => "1"
    );
    $header = array("Content-Type" => "application/json");

    if (isset($_GET($url, $keys, $body, $header) ) ) {
      //try and POST the variables with the keys and the body
      $currentUser = ParseUser::getCurrentUser();

      // use the $currentuser variable to determine if the user is there
      if ($currentUser) {
        return true;
      } else {

        return false;
      }
    }
  }
}

$login = new Login;



  
