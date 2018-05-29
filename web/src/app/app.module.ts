import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {appRouting} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Validators,FormControl,FormGroup,
        FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {
  AccordionModule,
  AutoCompleteModule,
  BlockUIModule,
  ButtonModule,
  ChipsModule,
  DropdownModule,
  InputTextModule,
  PanelModule,
  SelectButtonModule,
  MenubarModule, MenuModule, OverlayPanelModule,
  CheckboxModule, SpinnerModule,
  GrowlModule, ListboxModule,
  DialogModule, RadioButtonModule,
  CalendarModule,  
  ConfirmDialogModule, DataTableModule,
  InplaceModule, MessagesModule,DataListModule, 
  FieldsetModule, MegaMenuModule, PanelMenuModule, 
  ProgressSpinnerModule, SidebarModule, MessageModule,

  ConfirmationService,
} from 'primeng/primeng';



//import { SidebarModule } from 'ng-sidebar';
import {AppComponent} from './app.component';
import {studCreateComponent} from '../pages/main-page/main-page';
import {studDetailComponent} from '../pages/student/student';
import {WelcomestudComponent} from '../pages/welcome-page/welcome-page';
import { ClassesComponent } from '../pages/classes/classes';
import { SubjectsComponent } from '../pages/subjects/subjects';
import { StudentsComponent } from '../pages/students/students';
import { StaffsComponent } from '../pages/staffs/staffs';
import { SubstaffmappingComponent } from '../pages/substaffmapping/substaffmapping';
import { AttendanceComponent } from '../pages/attendance/attendances';

import { ClassService } from '../pages/classes/classservice';
import { SubjectService } from '../pages/subjects/subjectservice';
import { StudentService } from '../pages/students/studentservice';
import { StaffService } from '../pages/staffs/staffservice';
import { SubstaffmappingService } from '../pages/substaffmapping/substaffmappingservice';
import { LoginService } from '../providers/login-service';
import { AttendanceService} from '../pages/attendance/attendanceservice';



@NgModule({
  declarations: [
    AppComponent,
    studCreateComponent,
    studDetailComponent,
    WelcomestudComponent,
    ClassesComponent,
    SubjectsComponent,
    StudentsComponent,
    StaffsComponent,
    SubstaffmappingComponent,
    AttendanceComponent
    
  ],



  imports: [
    BrowserModule,
    appRouting,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    // primeng
    AccordionModule,
    AutoCompleteModule,
    BlockUIModule,
    ButtonModule,
    ChipsModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    SelectButtonModule,
    MenubarModule, MenuModule,
    OverlayPanelModule,
    CheckboxModule, SpinnerModule,
    GrowlModule, ListboxModule,
    DialogModule, RadioButtonModule,
    CalendarModule,ConfirmDialogModule, DataTableModule,
    InplaceModule, MessagesModule,DataListModule, 
    FieldsetModule, MegaMenuModule, SidebarModule,
    PanelMenuModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [ClassService,  SubjectService, HttpClient, StudentService, 
              StaffService, SubstaffmappingService, LoginService, AttendanceService,
              ConfirmationService],

  bootstrap: [AppComponent]
})
export class AppModule {}
