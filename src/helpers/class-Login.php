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
  //create if doesn't exists
  $insert = $this->db->insert('users',
     array(
      'username' => $post['username'],
      'password' => password_hash($post['password'], PASSWORD_DEFAULT),
      'name'     => $post['name'],
  )

);


if ( $insert == true ) {
  return array('status'=>1, 'message'=>'Account created succesfully');
  }
return array('status'=>0, 'message'=>'an unknown error ocurred');
  
}

private function user_exists($username) {

  $query = ParseUser::query();
  $query->equalTo($username, 'username');

  // find the current user by username
  $users = $query->find();

 /* $user = $this->db->get_results("
  SEELCT * FROM users
  where username = :username",
   ['username'=>$username] */

if ( false !== $query ) {
  return $query[0];
     }

     return false;
}


$login = new Login;

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