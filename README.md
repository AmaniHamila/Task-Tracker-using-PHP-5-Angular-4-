# Task-Tracker-using-PHP-5-Angular-4-

The frontend of the application is based on angular 4  and the backend is based on PHP5 ( with REST API that can communicate with the Angular ) and MySQL as a database.



The PHP Application ( phpTrialTask folder ) has 3 files:  

index.php : a file that handles the requests (GET/POST) and based on that calls the database operations.

taskCrud.php : a taskCrud class that calls index.php to handle database operations.

 .htaccess: a file to hide the PHP extention from the URL. 
 
 
 
 The Angular application ( trialTask folder ): 
 
app.component.ts:

it has the functions to start, pause or stop the tracker.
it also has functions to call db-crud services.
(PS: I used the ng2-smart-table component to displays information I get from the database. it already has interesting features like pagination and field-based filters).

app.component.html : 

A simple signle page with two sections, one to display the form and be able to either book a time or start/pause/stop the tracker and the other section to display all of the tasks/trackings.

db-crud.service.ts: the service handles the communication with the PHP.











 ---- Please Note ----
 
Design a simple MySQL database and table.


![Alt text](https://github.com/AmaniHamila/Task-Tracker-using-PHP-5-Angular-4-/DescribeTracks.PNG "Optional Title")

+----------------------+-----------+------+-----+---------+----------------+.

| Field                | Type      | Null | Key | Default | Extra          |.

+----------------------+-----------+------+-----+---------+----------------+.

| id                   | int(11)   | NO   | PRI | NULL    | auto_increment |.

| task_name            | char(30)  | YES  |     | NULL    |                |.

| tracking_description | char(200) | YES  |     | NULL    |                |.

| track_date           | date      | YES  |     | NULL    |                |.

| booked_time          | time      | YES  |     | NULL    |                |.

| finish_time          | time      | YES  |     | NULL    |                |.

+----------------------+-----------+------+-----+---------+----------------+.







To be able to run the angular app.

1- Install and Setup Angular 4 

2-Install Bootstrap 4 and ngx-bootstrap In Angular 4.

npm install bootstrap@3 jquery --save 

npm install ngx-bootstrap --save  

3-Install ng2-smart-table component.

npm install --save ng2-smart-table

