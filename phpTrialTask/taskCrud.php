<?php
/**
 * Created by PhpStorm.
 * User: Coldfire
 * Date: 03/02/2018
 * Time: 14:15
 */

class Tracks{
    //Get tracks
    function getTracks()
    {
        global $conn;
        $query="SELECT * FROM tracks ORDER BY id DESC";
        $response=array();
        $result=mysqli_query($conn, $query);
        while($row = mysqli_fetch_assoc($result))
        {
            $response[]=$row;
        }
        header('Content-Type: application/json');
        echo json_encode($response);
    }
    //Inserts a track
    function saveTrack($data,$restDate,$restBooked){
        global $conn;
        $query="INSERT INTO tracks (task_name, tracking_description, track_date, booked_time, finish_time ) 
        VALUES ('".$data->task_name."', '".$data->tracking_description."', '$restDate', '$restBooked', '".$data->finish_time."')";
        $result=mysqli_query($conn, $query);
        header('Content-Type: application/json');
        //Respond success / error messages
    }
}