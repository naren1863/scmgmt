import { Component, OnInit } from '@angular/core';
import {Staff} from '../staffs/staff';
import {StaffService} from '../staffs/staffservice';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.html',
  styleUrls: ['./staffs.css']
})
export class StaffsComponent implements OnInit {

        displayDialog: boolean;
        staff: Staff = new PrimeStaff();
        selectedStaff: Staff;
        staffs: Staff[];
    
        constructor(private staffService: StaffService) { }
    
        ngOnInit() {
            this.staffService.getStaffs().then(staffs => this.staffs = staffs);
        }
        
        
        onRowSelect(event) {
            
            this.staff = this.cloneSubject(event.data);
            this.displayDialog = true;
        }
        
        cloneSubject(c: Staff): Staff {
            let sub = new PrimeStaff();
            for(let prop in c) {
                sub[prop] = c[prop];
            }
            return sub;
        }
        
   }
    
    class PrimeStaff implements Staff {
        
        constructor(public fname?, public lname?) {}
    }