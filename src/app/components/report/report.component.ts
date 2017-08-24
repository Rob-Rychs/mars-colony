import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { Alien } from '../../models/alien';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { NewReport } from '../../models/report';

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
    private reportService: ReportService
  ) { }

  async ngOnInit() {
    this.aliens = await this.alienService.getAliens();
  }

  async registerReport() {
    const newReport: NewReport = {
      atype: this.encounterForm.get('atype').value,
      date: Date.now.toString(),
      action: this.encounterForm.get('action').value,
      colonist_id: 4
    }
  }
}
