<?php

use Parse\ParseFile;
use Parse\ParseUser;
use Parse\ParseException;


$user = new ParseUser;
$chats = new ParseFile;
$content = new ParseFile;
$readError = new ParseError;
$writeError = new ParseError;

 ($_POST['home']);

 $myCustomObject = new ParseUser($user);
 $myCustomObject = new ParseFile($chats);
 $myCustomObject = new ParseFile($content);
 $myCustomObject = new ParseError($readError);
 $myCustomObject = new ParseError($writeError);



 try {
   $myCustomObject->save();
   echo 'New object created with objectId: ' . $myCustomObject->getObjectId();
 } catch (ParseException $ex) {
   // Execute any logic that should take place if the save fails.
   // error is a ParseException object with an error code and message.
   echo 'Failed to create new object, with error message: ' . $ex->getMessage();
 }

?>

