import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/encounters';
import { Report } from '../../models/report';


@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [
    ReportService
  ]
})
export class EncountersComponent implements OnInit {

  // report: Report;
  reports: Report[];

  constructor(private reportService: ReportService) { }
   
    async ngOnInit() {
      this.reports = await this.reportService.getReport();
      // this.reports = report;
      console.log(this.reports);
    }

}
