<?php 
require 'autoload.php';

use Parse\ParseClient;

// Initializes with the <APPLICATION_ID>, <REST_KEY>, and <MASTER_KEY>
ParseClient::initialize( "BCrUQVkk80pCdeImSXoKXL5ZCtyyEZwbN7mAb11f", "swrFFIXJlFudtF3HkZPtfybDFRTmS7sPwvGUzQ9w", "5AVAtvlGlG5cEeolatkFDhY5p99PzoBUvm7MBLMo" );
ParseClient::setServerURL('https://parseapi.back4app.com', '/');