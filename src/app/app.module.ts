import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './componenets/welcome/welcome.component';
import { RegisterComponent } from './componenets/register/register.component';
import { EncountersComponent } from './componenets/encounters/encounters.component';
import { ReportComponent } from './componenets/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
