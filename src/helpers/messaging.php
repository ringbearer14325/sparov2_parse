<?php


use Parse\ParseUser;
use Parse\ParseException;
use Parse\ParseObject;

$url = "https://parseapi.back4app.com/classes/Message";
$myCustomObject = new ParseObject("Message");

$myCustomObject->set("toUser", ParseUser::getCurrentUser());
$myCustomObject->set("read", true);
$myCustomObject->set("fromUser", ParseUser::getCurrentUser());
$myCustomObject->set("message","a string");
$myCustomObject->set("Connections", new ParseObject("Connections"));

($_POST['X-Parse-Application-Id: BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f]']);
$_POST['X-Parse-REST-API-Key: swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w'];




 try {
   $myCustomObject->save();
   echo 'New object created with objectId: ' . $myCustomObject->getObjectId();
 } catch (ParseException $ex) {
   // Execute any logic that should take place if the save fails.
   // error is a ParseException object with an error code and message.
   echo 'Failed to create new object, with error message: ' . $ex->getMessage();
 }

?>

