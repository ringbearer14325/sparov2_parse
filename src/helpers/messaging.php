$myCustomObject = new ParseObject("Message");

$myCustomObject->set("toUser", ParseUser::getCurrentUser());
$myCustomObject->set("read", true);
$myCustomObject->set("fromUser", ParseUser::getCurrentUser());
$myCustomObject->set("fromUserId", "A string");
$myCustomObject->set("isMessageFile", true);
$myCustomObject->set("message", "A string");
$myCustomObject->set("toUserId", "A string");
$myCustomObject->set("Connections", new ParseObject("Connections"));
$myCustomObject->set("ConnectionsId", "A string");
$myCustomObject->set("messageFile", ParseFile::createFromData("My resume content", "resume.txt"));
$myCustomObject->set("fileUploaded", true);
$myCustomObject->set("call", new ParseObject("Calls"));

try {
  $myCustomObject->save();
  echo 'New object created with objectId: ' . $myCustomObject->getObjectId();
} catch (ParseException $ex) {
  // Execute any logic that should take place if the save fails.
  // error is a ParseException object with an error code and message.
  echo 'Failed to create new object, with error message: ' . $ex->getMessage();
}

