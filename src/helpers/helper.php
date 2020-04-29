<?php
require 'autoload.php';

ParseClient::initialize( $app_id, $rest_key, $master_key );

// Users of Parse Server will need to point ParseClient at their remote URL and Mount Point:
ParseClient::setServerURL('https://my-parse-server.com:port','parse');


3530e650-3586-4db1-bebd-c3451c8ed48a

?>