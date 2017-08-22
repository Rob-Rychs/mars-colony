import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [
    AlienService,
    ReportService
  ]
})
export class ReportComponent implements OnInit {

  constructor(
    private alienService: AlienService,
    private reportService: ReportService
  ) { }

  // this code here is the exact same as the below, different syntax
  // ngOnInit() {
  //   this.alienService.getAliens().then((response) => {
  //     console.log(response);
  //   });
  // }
  // this uses async + await to handle the promise 
  async ngOnInit() {

    const data = {
      atype : "Octospider",
      date : "2015-10-01",
      action : "fully retarded Web developer.",
      colonist_id : 4
    };
    const newReport = await this.reportService.registerReport(data);
    console.log(newReport);

    const aliens = await this.alienService.getAliens();
    console.log(aliens);
  }

}
