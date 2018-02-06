import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptionsArgs} from '@angular/http';
import 'rxjs/Rx';



@Injectable()
export class DbCrudService {
  apiURL = 'http://localhost/index.php';
    constructor( private http: Http) {}
    saveTrack(tasks: any[]) {
        this.http.post(this.apiURL, tasks)
            .subscribe(
                (val) => {
                    console.log('POST call successful value returned in body',
                        JSON.stringify(val));
                },
                response => {
                    console.log('POST call in error', response);
                },
                () => {
                    console.log(' The POST observable is now completed.');
                });
    }
    getTracks()   {
        const headers = new Headers();
        headers.append('Cache-Control', 'no-cache');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        headers.append('Access-Control-Max-Age', '1728000');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get(this.apiURL);
    }

}
