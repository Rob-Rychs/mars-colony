import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { Alien } from '../../models/alien';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { NewReport } from '../../models/report';
import { ColonistService } from '../../services/colonist';
import { Router } from '@angular/router';
import { Colonist } from '../../models/colonist';

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

  public aliens: Alien[];

  encounterForm = new FormGroup({
    atype: new FormControl('', [Validators.required]),
    action: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
      Validators.minLength(5)
    ])
  });

  constructor(
    private alienService: AlienService,
    private reportService: ReportService,
    private colonistService: ColonistService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.aliens = await this.alienService.getAliens();
  }

  async newReport() {
    
    const colonistId = this.colonistService.getStoredColonist().id.toString();
    let todayDate = new Date().toString();
    // .toISOString().slice(0,10); 
    console.log('hello there');
    const newReport: NewReport = {
      atype: this.encounterForm.get('atype').value,
      date: todayDate,
      action: this.encounterForm.get('action').value,
      colonist_id: '31'
    };
    console.log('again');
    await this.reportService.registerReport(newReport);
    this.router.navigate(['encounters']);
  }
}
