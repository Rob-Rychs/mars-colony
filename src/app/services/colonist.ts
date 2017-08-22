import { Injectable } from '@angular/core'; // something about defining dependent modules?
import { Colonist, NewColonist } from '../models/colonist'; // bring in our class data schema
import { Http, Headers } from '@angular/http'; // @angular ajax ftw
import 'rxjs/add/operator/toPromise'; // turns request into promise

// hand drafted from copy/paste code from slides below step by step

@Injectable()
export class ColonistService {
  colonistUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists'; // endpoint URL

  constructor(private http: Http) {} // create instance of http object
  registerColonist(colonist: NewColonist): Promise<Colonist> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify({ colonist });
    return this.http
               .post(this.colonistUrl, body, { headers: headers })
               .toPromise()
               .then(response => response.json().colonist)
               .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}