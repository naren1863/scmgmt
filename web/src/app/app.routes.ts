import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { studCreateComponent } from '../pages/main-page/main-page';
import { studDetailComponent } from '../pages/student/student';
import { WelcomestudComponent } from '../pages/welcome-stud/welcome-stud';

const appRoutes: Routes = [
  { path: 'student', component: studDetailComponent },
  { path: 'main-page', component: studCreateComponent },
  { path: '**', component: WelcomestudComponent }
 
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
