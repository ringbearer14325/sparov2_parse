<?php

use Parse\ParseException;
use Parse\ParseUser;

class Login {
  
  
  // add headers variables
  public $url = "https://parseapi.back4app.com/login";
  public $body = "src\components\user.json";
  public $applicationId = "applicationId";
  public $REST_API_KEY = "REST_API_KEY";
  
  
  
  public function __construct() {
    global $users;
    
    session_start();
    
    $this->user = $users;    
    //$this->user = new ParseUser();
  }  
  

public function verify_login($post) {
  if ( ! isset($post['username'] ) || ! isset($post['password'] ) ) {
    return false;
  }
  
  //check if the user exists 
  $user = $this->user_exists( $post['username'] );
  
  if ( false !== $user ) {
    if ( password_verify( $post['password'], $user->password ) ) {
      $_SESSION['username'] = $user->username;
      
      return true;
    }
}

return false;

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
  
    if (isset($_POST["https://parseapi.back4app.com/login"] ) ) {
      header("X-Parse-Application-Id: BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f",
       "X-Parse-REST-API-Key: swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w");

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



private function user_exists($username) {
  $query = ParseUser::query();
  $query->equalTo($username, 'username');
  
  // uss query() method to find user
  $users = $query->find();

if ( false !== $query ) {
  return $query[0];
     }

     return false;
}


$login = new Login;

}


  
?>