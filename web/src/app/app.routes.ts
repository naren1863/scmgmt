import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { studCreateComponent } from '../pages/main-page/main-page';
import { studDetailComponent } from '../pages/student/student';
import { WelcomestudComponent } from '../pages/welcome-page/welcome-page';
import { ClassesComponent } from '../pages/classes/classes';
import { StudentsComponent } from '../pages/students/students';
import { StaffsComponent } from '../pages/staffs/staffs';
import { SubjectsComponent } from '../pages/subjects/subjects';
import { AttendanceComponent } from '../pages/attendance/attendances';
const appRoutes: Routes = [
  { path: 'student', component: studDetailComponent },
  { path: 'main-page', component: studCreateComponent },
  { path: 'classes', component: ClassesComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'students', component: StudentsComponent},
  { path: 'staffs', component: StaffsComponent},
  { path: 'attendance', component: AttendanceComponent},
  { path: '**', component: WelcomestudComponent }
 
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
