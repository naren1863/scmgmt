import { Component, OnInit } from '@angular/core';
import {Subject} from '../subjects/subject';
import {SubjectService} from '../subjects/subjectservice';
import {Message} from 'primeng/primeng'
import {ConfirmationService} from 'primeng/primeng';
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
        subs.push(this.subject);
        this.subjects = subs;
        
        this.displayDialog = false;
        this.subService.saveSubject(this.subject);
        this.msgs = [{severity:'success', summary:'Saved', detail: subject.subject + ' is saved'}];
        this.subject = null;
      }

      validate(subject){
        this.inlineMsgs =[];
          if(!subject.subject || subject.subject.length == 0){
            this.inlineMsgs.push({severity:'error', detail: 'Subject Name field is Required'});
          }
          if(!subject.desc || subject.desc.length == 0){
            this.inlineMsgs.push({severity:'error', detail: 'Description field is Required'});
          }
          if(this.inlineMsgs.length > 0){
              return false;
          }
          return true;
      }
      val: String = "";
      deleteSubject(subject){
        console.log(">> deleteSubject: ", this.selectedSub);
        console.log(">> deleteSubject1: ", subject);
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
                console.log("**: " , this.subject);
                this.val = JSON.stringify(this.subject);
                subs.push(this.subject);
                this.subjects = subs;
                this.subService.deleteSubject(this.selectedSub);
                this.msgs = [{severity:'success', summary:'Deleted', detail: this.selectedSub.subject + ' is deleted'}];
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
      
      constructor( public subjectid?, public subject?, public desc?, public deleted=false) {
          
      }
  }