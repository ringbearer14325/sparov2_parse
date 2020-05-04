<?php 


$url = "https://parseapi.back4app.com/users";
$applicationId = "X-Parse-Application-Id: BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f";
$REST_API_KEY = "X-Parse-REST-API-Key: swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w";
$body = "src\components\user.json";


$user = new ParseUser();
$user->set("username", "my name");
$user->set("password", "my pass");
$user->set("email", "email@example.com");

// Other fields can be set just like any other ParseObject,
// like this: $user->set("attribute", "its value");
// If this field does not exists, it will be automatically created
// other fields can be set just like with ParseObject

try {
  $user->signUp();
  // Hooray! Let them use the app now.
} catch (ParseException $ex) {
  // Show the error message somewhere and let the user try again.
  echo "Error: " . $ex->getCode() . " " . $ex->getMessage();
}


?>
