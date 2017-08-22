import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegisterComponent } from './components/register/register.component';
import { EncountersComponent } from './components/encounters/encounters.component';
import { ReportComponent } from './components/report/report.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const appRoutes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'encounters', component: EncountersComponent},
  { path: 'report', component: ReportComponent},
  { path: '**', component: NotfoundComponent},
];