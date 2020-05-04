<?php
use Parse\ParseUser;
use Parse\ParseException;
use Parse\ParseObject;


// add header variables
$url = "https://parseapi.back4app.com/classes/Message";
$body = "src\helpers\message.json";
$applicationId = "X-Parse-Application-Id: BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f";
$REST_API_KEY = "X-Parse-REST-API-Key: swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w";


// construct message object
$message = new ParseObject("Message");
$message->set("toUser", ParseUser::getCurrentUser());
$message->set("read", true);
$message->set("fromUser", ParseUser::getCurrentUser());
$message->set("message","a string");
$message->set("Connections", new ParseObject("Connections"));

// post method for headers
if (empty($_POST[$applicationId]) && empty($_POST([$REST_API_KEY]) ) ) die(); 

if (isset($_POST[$applicationId]) && isset($_POST([$REST_API_KEY]) ) ) {
  
  // set responce code = 201
  http_response_code(201);


  // data
  $subject = $_POST($message);
  $to = $_POST($url, $body);

} else try {
   $message->save();
   echo 'New object created with objectId: ' . $message->getObjectId();
 } catch (ParseException $ex) {
   // Execute any logic that should take place if the save fails.
   // error is a ParseException object with an error code and message.
   echo 'Failed to create new object, with error message: ' . $ex->getMessage();
 } 


?>

