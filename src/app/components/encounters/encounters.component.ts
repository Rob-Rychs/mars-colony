import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/encounters';


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: [],
  providers: [
    ReportService
  ]
})
export class EncountersComponent implements OnInit {

  constructor(private reportService: ReportService) { }
  
    // this code here is the exact same as the below, different syntax
    // ngOnInit() {
    //   this.reportService.getReport().then((response) => {
    //     console.log(response);
    //   });
    // }
    // this uses async + await to handle the promise 
    async ngOnInit() {
      const report = await this.reportService.getReport();
      console.log(report);
    }

}
