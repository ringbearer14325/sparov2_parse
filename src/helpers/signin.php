<?php
try {
    $user = ParseUser::logIn("myname", "mypass");
    // Do stuff after successful login.
  } catch (ParseException $error) {
    // The login failed. Check error to see why.
  }


?>