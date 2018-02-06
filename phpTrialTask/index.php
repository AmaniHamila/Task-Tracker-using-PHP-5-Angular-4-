<?php
/**
 * Created by PhpStorm.
 * User: Coldfire
 * Date: 03/02/2018
 * Time: 14:14
 */

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
// Connect to database
$conn = mysqli_connect("localhost","root","mypass","tasktrialdatabase");
include_once('taskCrud.php');
$request_method = $_SERVER["REQUEST_METHOD"];
$data = json_decode(file_get_contents("php://input"));
$track = new Tracks;
switch($request_method)
{
    case 'GET':
        // Retrive Tracks
            $track->getTracks();

        break;
    case 'POST':
        // Insert Track

        $restDate = substr("$data->track_date", 0, 10);
        $restBooked = substr("$data->booked_time", 11, 8 );
        $track->saveTrack($data,$restDate,$restBooked);
        break;

    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}