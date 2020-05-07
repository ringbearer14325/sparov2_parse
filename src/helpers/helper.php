<?php
require 'autoload.php';
require 'vendor/autoload.php';

use Parse\ParseClient;

// Initializes with the <APPLICATION_ID>, <REST_KEY>, and <MASTER_KEY>
ParseClient::initialize( "yzRv0M18nfehYtjg4toFBzWkRL1WL2Vs6CJVDISv", "f98A0W7r7G1DYzkLjTx5fCmKf4EZTUBleBmC3AmZ", "ExzYiYfhx4vcfRRK7SqL7Ez9gibXUHOYwPrlOuMq" );
ParseClient::setServerURL('https://parseapi.back4app.com', '/');

?>