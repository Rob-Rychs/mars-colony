import { Injectable } from '@angular/core'; // something about defining dependent modules?
import { Job } from '../models/job'; // bring in our class data schema
import { Http, Headers } from '@angular/http'; // @angular ajax ftw
import 'rxjs/add/operator/toPromise'; // turns request into promise

// hand drafted from copy/paste code from slides below step by step

@Injectable()
export class JobService {
  jobsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/jobs'; // endpoint URL

  constructor(private http: Http) {} // create instance of http object
  getJobs(): Promise<Job[]> {
    return this.http.get(this.jobsUrl) //make http GET request on url
              .toPromise() //turn to promise
              .then(response => response.json().jobs) // turn the response to response.json with .then event handler
              .catch(this.handleError); // catch unexpected errors that you did not program

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
