<?php

require 'vendor/autoload.php';

$_id = isset($_GET['_id']) ? json_decode($_GET['_id']) : 1;

$client = new MongoDB\Client();

$arts = [];

if ($_id == 1) {
    $arts = $client->newsfeed->article->find();

    echo(json_encode(iterator_to_array($arts)));
} else {
    $search = [];

    foreach ($_id as $value) {
        $value = get_object_vars($value);
        $arts[] = $client->newsfeed->article->findOne(['_id' => new MongoDB\BSON\ObjectID('' . $value['$oid'])]);
    }

    echo(json_encode($arts));
}
