#!/usr/local/bin/php -q
<?php

set_time_limit(0);

$url = 'http://data.nba.com/data/v2015/json/mobile_teams/nba/2018/teams/bulls_schedule_02.json';
$file = fopen(dirname(__FILE__) . '/feed/1819/bulls_schedule_02.json', 'w+');

$curl = curl_init($url);

// Update as of PHP 5.4 array() can be written []
curl_setopt_array($curl, [
    CURLOPT_URL            => $url,
//  CURLOPT_BINARYTRANSFER => 1, --- No effect from PHP 5.1.3
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_FILE           => $file,
    CURLOPT_TIMEOUT        => 50,
    CURLOPT_USERAGENT      => 'Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)'
]);

$response = curl_exec($curl);

if($response === false) {
    // Update as of PHP 5.3 use of Namespaces Exception() becomes \Exception()
    throw new \Exception('Curl error: ' . curl_error($curl));
}

$response; // Do something with the response.


?>
