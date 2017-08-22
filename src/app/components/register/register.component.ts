import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {

  constructor(
    private jobService: JobService, 
    private colonistService: ColonistService
  ) { }

  // this code here is the exact same as the below, different syntax
  // ngOnInit() {
  //   this.jobService.getJobs().then((response) => {
  //     console.log(response);
  //   });
  // }
  // this uses async + await to handle the promise 
  async ngOnInit() {
    
    const data = {
      name: 'Dope Boi',
      age: '42',
      job_id: '2'
    };
    const newColonist = await this.colonistService.registerColonist(data);
    console.log(newColonist);

    const jobs = await this.jobService.getJobs();
    console.log(jobs);
  }

}
