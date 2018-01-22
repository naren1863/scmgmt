import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

import { BasePage } from '../base-page/base-page';
@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.html',
  styleUrls: ['./invoice-create.css']
})
export class InvoiceCreateComponent extends BasePage {

  carrierBU: string = '';
  businessUnit: string;
  carrierBuList: SelectItem[] =[];
  buFVList: any[] = [];
  buList: SelectItem[] =[];

  selectedBookingKey: string = '';
  bookingList: SelectItem[] = [];
  selectedBooking: string = '';
  billofLading: string = '';
  carrierBookingReferenceNumber: string = '';
  shipperBookingReferenceNumber: string = '';

  carrierText: string = '';
  carrierTextBU: string;
  carriers: SelectItem[]= [];
  carriersList: string[] = [];
  
  showClasses:boolean = true;
  showSubjects:boolean = false;
  showStudents:boolean = false;
  showStaffs:boolean = false;

  actionMessage = '';
  msgs: Message[] = [];

  items: MenuItem[];

  display: boolean = false;
  constructor(private router: Router) {
              super();
      this.onInit();
  }


 
  isValid(): Promise<boolean> {
    let valid = false;
    this.carriers.forEach((carrier: SelectItem)=> {
      if (this.carrierText == carrier.label) {
        this.carrierTextBU = carrier.value;
        valid = true;
        return valid;
      }
    });
    return Promise.resolve(valid);
  }

  onCancel() {
    console.log("OnCancel");
  }

  getDisabled(field:string) {
    if (this.selectedBookingKey && this.selectedBookingKey == field) {
      return false;
    }
    return true;
  }

  onBUSelect() {
    console.log("onBUSelect");
  }

  showRetrieveBooking() {
    let retVal = !(this.selectedBooking && this.selectedBooking.length > 0 
            && this.businessUnit && this.businessUnit.length > 0 
            && this.carrierText && this.carrierText.length >0);
    return retVal;
  }

  addStudent(){
    this.router.navigate(["invoice-detail"]);
  }
  showProject(msg){
    if(msg == 'Classes'){
      this.showClasses = true;
      this.showSubjects = false;
      this.showStudents = false;
      this.showStaffs = false;
    }
      
    if(msg == 'Subjects') {
      this.showSubjects = true;
      this.showClasses = false;
      this.showStudents = false;
      this.showStaffs = false;
    }
    
    if(msg == 'Students') {
      this.showStudents = true;
      this.showSubjects = false;
      this.showClasses = false;
      this.showStaffs = false;
    }
    if(msg == 'Staffs') {
      this.showStudents = false;
      this.showSubjects = false;
      this.showClasses = false;
      this.showStaffs = true;
    }

    this.actionMessage = msg;
  }
   onInit() {
    this.items = [
      {
          label: 'Admistration',
          icon: 'fa-file-o',
          expanded: true,
          items: [{
                label: 'Classes', 
                icon: 'fa-plus',
                command: (event) => { this.showProject('Classes') }
              },
              {
                label: 'Subjects', 
                icon: 'fa-plus',
                command: (event) => { this.showProject('Subjects') }
              },
              {
                label: 'Students', 
                icon: 'fa-plus',
                command: (event) => { this.showProject('Students') }
            },
            {
              label: 'Staffs', 
              icon: 'fa-plus',
              command: (event) => { this.showProject('Staffs') },
              items: [{
                    label: 'Teaching', 
                    icon: 'fa-plus',
                    command: (event) => { this.showProject('Teaching') }
                  },
                  {
                    label: 'Non Teaching', 
                    icon: 'fa-plus',
                    command: (event) => { this.showProject('Non Teaching') }
                  },
              ]
            }
          ]
      },
      {
          label: 'Attendance',
          icon: 'fa-edit',
          command: (event) => { this.showProject('Attendance')}
      },
      {
          label: 'Messaging System',
          icon: 'fa-edit',
          command: (event) => { this.showProject('Messaging')}
      }
  ];
}
}
