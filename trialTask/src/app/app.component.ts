import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DbCrudService} from './db-crud.service';
import {Headers, Http, RequestOptionsArgs} from '@angular/http';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    taskTracking: any ;
    myTime: string ;
    myTime2: Date = new Date();
    showMin = true;
    showSec = true;
    ismeridian = false;
    timer = 0;
    intervalId: any;
    isValid = false ;
    show: string;
    source: LocalDataSource = new LocalDataSource();
    settings = {
        actions: false,
        columns: {
            id: {
                title: 'ID',
                type: 'number'
            },
            task_name: {
                title: 'Task',
                type: 'string',
            },
            tracking_description: {
                title: 'Description',
                type: 'string',
            },
            track_date: {
                title: 'Date',
                type: 'string',
            },
            booked_time: {
                title: 'Booked time',
                type: 'string',
            },
            finish_time: {
                title: 'Unbooked time',
                type: 'string',
            }
        }
    };

    constructor(private service: DbCrudService, private http: Http) {
    }
    ngOnInit(): void {
        this.getData();
    }
    startTime() {

        this.isValid = true ;
        this.intervalId = setInterval(() => {
            this.timeIt();
        }, 1000);

    }
    pauseTime() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    stopTime() {
        this.pauseTime();
        this.timer = 0 ;
    }
    timeIt(): any {
        this.timer++;
        this.show =  this.sToTime(this.timer);
    }
    sToTime(duration) {
        const seconds = Math.floor((duration ) % 60);
        const minutes = Math.floor ((duration / (60)) % 60);
        const hours = Math.floor((duration / ( 60 * 60)) % 24);

        const shours = (hours < 10) ? '0' + hours : hours;
        const sminutes = (minutes < 10) ? '0' + minutes : minutes;
        const sseconds = (seconds < 10) ? '0' + seconds : seconds;

        return shours + ':' + sminutes + ':' + sseconds ;
    }

    getData(): void {
        this.service.getTracks().subscribe( response => {
                this.taskTracking = response.json();
                this.source.load(this.taskTracking);
            } ,
            (error) => {console.log(error); }
        );
        }
    onSubmit( f: NgForm): void {
        if (f.value.booked_time === undefined) {
            f.value.booked_time = '00:00:00' ; } else
             if (f.value.finish_time === undefined) {
             f.value.finish_time = '00:00:00' ;
         }
       // console.log ( JSON.stringify (f.value));
       this.service.saveTrack(f.value) ;

    }
}

