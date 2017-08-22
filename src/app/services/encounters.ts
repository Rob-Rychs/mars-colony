import { Injectable } from '@angular/core'; // something about defining dependent modules?
import { Report, NewReport } from '../models/report'; // bring in our class data schema
import { Http, Headers } from '@angular/http'; // @angular ajax ftw
import 'rxjs/add/operator/toPromise'; // turns request into promise

// hand drafted from copy/paste code from slides below step by step

@Injectable()
export class ReportService {
  encountersUrl = 'https://red-wdp-api.herokuapp.com/api/mars/encounters'; // endpoint URL

  constructor(private http: Http) {} // create instance of http object
  getReport(): Promise<Report[]> {
    return this.http.get(this.encountersUrl) //make http GET request on url
              .toPromise() //turn to promise
              .then(response => response.json().encounters) // turn the response to response.json with .then event handler
              .catch(this.handleError); // catch unexpected errors that you did not program

  }
  registerReport(encounter: NewReport): Promise<Report> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify({ encounter });
    return this.http
               .post(this.encountersUrl, body, { headers: headers })
               .toPromise()
               .then(response => response.json().report)
               .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}