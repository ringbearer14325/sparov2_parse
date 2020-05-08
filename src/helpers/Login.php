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

  
  $user = ParseUser::logIn("myname", "mypass");


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
    // Do stuff after successful login.
  } catch (ParseException $error) {
    // The login failed. Check error to see why.
  }
}

}


  
?>