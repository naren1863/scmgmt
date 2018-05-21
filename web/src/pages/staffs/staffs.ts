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
        staff: Staff = new PrimeStaff("", "", null);
        selectedStaff: Staff;
        staffs: Staff[];
        activeIdx: number = -1;
        isNewStaff: boolean = false;
        detailPageTitle: String = "Add Teacher";

        constructor(private staffService: StaffService) { }
    
        ngOnInit() {
            this.staffService.getStaffs().then(staffs => this.staffs = staffs);
        }
        
        showDialogToAdd(){
            this.isNewStaff = true;
            this.detailPageTitle = "Add Teacher";
            this.staff = new PrimeStaff("", "", null);
            this.displayDialog = true;
        }

        showDialogToUpdate(staff){
            this.detailPageTitle = "Update Teacher";
            this.staff = staff;
            this.displayDialog = true;
        }

        gotoListPage(){
            this.staff = null;
            this.displayDialog = false;
        }  

        saveStaff(staff){
            console.log(">> saveSubjects: ", staff);
            let staffs = [...this.staffs];
            this.staff = this.cloneSubject(staff);
            if(this.isNewStaff){
                staffs.push(this.staff);
            } else {
                staffs[this.findSelectedStaffIndex()] = this.staff;
            }
            
            this.staffs = staffs;
            
            this.displayDialog = false;
            this.staffService.saveStaff(this.staff);
            this.isNewStaff = false;
            //this.staff = null;
          }
    
          deleteStaff(staff){
            
            console.log(">> deleteStaff: ", staff);
            let index = this.findSelectedStaffIndex();
            console.log("-- deleteSubject: ", index);
            this.staffs = this.staffs.filter((val,i) => i!=index);
            staff.isdeleted = true;
           
            this.staffService.deleteStaff(staff);
          }

          updateStaff(staff){
            
            console.log(">> updateStaff: ", staff);
            this.staff = staff;
            let index = this.findSelectedStaffIndex();
            console.log("-- updateStaff: ", index);
            this.staffs = this.staffs.filter((val,i) => i!=index);
           
           
            this.staffService.deleteStaff(staff);
          }

          findSelectedStaffIndex(): number {
            console.log("-- index: ", this.activeIdx);
            return this.activeIdx;
          }

          setIndex(event){
            this.activeIdx = event.index;
          }
        
        cloneSubject(c: Staff): Staff {
            let staff = new PrimeStaff("", "", null);
            for(let prop in c) {
                staff[prop] = c[prop];
            }
            return staff;
        }
        
   }
    
    class PrimeStaff implements Staff {
        constructor(
            public staffid: String,
            public fullname: String,
            public dob: Date,
            gender?,
            qualification?,
            mail?,
            mobile?,
            address?,
            password?,
            isdeleted?
        ) {}
    }