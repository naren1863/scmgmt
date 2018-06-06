import { Component, OnInit } from '@angular/core';
import {Subject} from '../subjects/subject';
import {SubjectService} from '../subjects/subjectservice';
import {Message} from 'primeng/primeng'
import {ConfirmationService} from 'primeng/primeng';
import {Globals}  from 'app/global';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.html',
  styleUrls: ['./subjects.css']
})
export class SubjectsComponent implements OnInit {
      
      msgs: Message[] = [];
      inlineMsgs: Message[] = [];
      displayDialog: boolean;
      subject: Subject = new PrimeSubject();
      selectedSub: Subject;
      subjects: Subject[];
  
      constructor(private confirmService: ConfirmationService, private subService: SubjectService) { }
  
      ngOnInit() {
          this.subService.getSubjects().then(subjects => this.subjects = subjects);
      }
      
      
      onRowSelect(event) {
          this.subject = this.cloneSubject(event.data);
          this.displayDialog = true;
      }

      showDialogToAdd(){
        this.inlineMsgs =[];
        this.subject = new PrimeSubject();
          this.displayDialog = true;
      }

      saveSubject(subject){
        console.log(">> saveSubjects: ", subject);
        if(!this.validate(subject)){
            return false;
        }
        let subs = [...this.subjects];
        this.subject = this.cloneSubject(subject);
        if(this.subject.subjectId == undefined){
            this.subject.createdBy = Globals.loggedInUser;
        } else {
            this.subject.updatedBy = Globals.loggedInUser;
        }
        
        
        this.displayDialog = false;
        this.subService.saveSubject(this.subject).subscribe(ele => {
            this.subject = ele;
            console.log("Saved Subject: ", this.subject);
            subs.push(this.subject);
            this.subjects = subs;
        });
        this.msgs = [{severity:'success', summary:'Saved', detail: subject.subject + ' is saved'}];
        this.subject = null;
      }

      validate(subject){
        this.inlineMsgs =[];
          if(!subject.subjectName || subject.subjectName.length == 0){
            this.inlineMsgs.push({severity:'error', detail: 'Subject Name field is Required'});
          }
          if(!subject.subjectDescription || subject.subjectDescription.length == 0){
            this.inlineMsgs.push({severity:'error', detail: 'Description field is Required'});
          }
          if(this.inlineMsgs.length > 0){
              return false;
          }
          return true;
      }
      val: String = "";
      deleteSubject(subject){
        console.log(">> deleteSubject: ", subject);
        this.selectedSub = subject;
        this.confirmService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                let index = this.findSelectedSubIndex();
                this.subjects = this.subjects.filter((val,i) => i!=index);
                this.displayDialog = false;
                subject.deleted = true;

                let subs = [...this.subjects];
                this.subject = this.cloneSubject(subject);
                this.subject.updatedBy = Globals.loggedInUser;
                console.log("**: " , this.subject);
                this.subService.saveSubject(this.subject).subscribe(ele => {
                    this.subject = ele;
                    console.log("Deleted Subject: ", this.subject);
                    subs.push(this.subject);
                    this.subjects = subs;
                });
                this.msgs = [{severity:'success', summary:'Deleted', detail: this.subject.subjectName + ' is deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'Delete operation is cancelled'}];
            }
        });
       
        
      }
    
      gotoListPage(){
        this.subject = null;
        this.displayDialog = false;
     }   
    findSelectedSubIndex(): number {
        return this.subjects.indexOf(this.selectedSub);
    }
      
      cloneSubject(c: Subject): Subject {
          let sub = new PrimeSubject();
          for(let prop in c) {
              sub[prop] = c[prop];
          }
          return sub;
      }
      
 }
  
  class PrimeSubject implements Subject {
      
      constructor( 
        public subjectId?, 
        public subjectName?, 
        public subjectDescription?, 
        public deleted=false,
        public createdBy='',
        public updatedBy=''
    ) {
          
      }
  }