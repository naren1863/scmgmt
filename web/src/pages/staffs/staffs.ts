import { Component, OnInit } from '@angular/core';
import {Staff} from '../staffs/staff';
import {StaffService} from '../staffs/staffservice';
import {ConfirmDialogModule} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/primeng';
import {Message, MessagesModule, MessageModule} from 'primeng/primeng';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.html',
  styleUrls: ['./staffs.css']
})
export class StaffsComponent implements OnInit {

        msgs: Message[] = [];
        inlineMsgs: Message[] = [];
        displayDialog: boolean;
        staff: Staff = new PrimeStaff("", "", null);
        selectedStaff: Staff;
        staffs: Staff[];
        activeIdx: number = -1;
        isNewStaff: boolean = false;
        detailPageTitle: String = "Add Teacher";

        constructor(private confirmationService: ConfirmationService, private staffService: StaffService) { }
    
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
            if(!this.validate(staff)){
                return false;
            }
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
            this.msgs = [{severity:'success', summary:'Saved', detail: staff.fullname + ' is saved'}];
            //this.staff = null;
          }

          validate(staff){
            this.inlineMsgs =[];
              if(!staff.fullname || staff.fullname.length == 0){
                this.inlineMsgs.push({severity:'error', id:'gender', detail: 'Full Name field is Required'});
              }
              if(!staff.dob || staff.dob.length <= 0){
                this.inlineMsgs.push({severity:'error', id:'gender', detail: 'Date of Birth field is Required'});
              }
              if(!staff.gender || staff.gender.length <= 0){
                this.inlineMsgs.push({severity:'error', id:'gender', detail: 'Gender field is Required'});
              }
              if(this.inlineMsgs.length > 0){
                  return false;
              }
              return true;
          }
    
          deleteStaff(staff){
            this.confirmationService.confirm({
                message: 'Are you sure that you want to perform this action?',
                accept: () => {
                    console.log(">> deleteStaff: ", staff);
                    let index = this.findSelectedStaffIndex();
                    console.log("-- deleteSubject: ", index);
                    this.staffs = this.staffs.filter((val,i) => i!=index);
                    staff.isdeleted = true;
                
                    this.staffService.deleteStaff(staff);
                    this.msgs = [{severity:'success', summary:'Deleted', detail: staff.fullname + ' is deleted'}];
                },
                reject: () => {
                    this.msgs = [{severity:'info', summary:'Rejected', detail:'Delete operation is cancelled'}];
                }
            });
            
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