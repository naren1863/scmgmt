import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {appRouting} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
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
  InplaceModule, MessagesModule,DataListModule, FieldsetModule, MegaMenuModule, PanelMenuModule
} from 'primeng/primeng';

import { SidebarModule } from 'ng-sidebar';
import {AppComponent} from './app.component';
import {studCreateComponent} from '../pages/main-page/main-page';
import {studDetailComponent} from '../pages/student/student';
import {WelcomestudComponent} from '../pages/welcome-page/welcome-page';
import { ClassesComponent } from '../pages/classes/classes';
import { SubjectsComponent } from '../pages/subjects/subjects';
import { StudentsComponent } from '../pages/students/students';
import { StaffsComponent } from '../pages/staffs/staffs';

import { CarService } from '../pages/classes/carservice';
import { SubjectService } from '../pages/subjects/subjectservice';
import { StudentService } from '../pages/students/studentservice';
import { StaffService } from '../pages/staffs/staffservice';

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
    PanelMenuModule, HttpClientModule
  ],
  providers: [CarService,  SubjectService, HttpClient, StudentService, StaffService],
  bootstrap: [AppComponent]
})
export class AppModule {}
