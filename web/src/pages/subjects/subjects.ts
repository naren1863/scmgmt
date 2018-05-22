import { Component, OnInit } from '@angular/core';
import {Subject} from '../subjects/subject';
import {SubjectService} from '../subjects/subjectservice';


@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.html',
  styleUrls: ['./subjects.css']
})
export class SubjectsComponent implements OnInit {
      displayDialog: boolean;
      subject: Subject = new PrimeSubject();
      selectedSub: Subject;
      subjects: Subject[];
  
      constructor(private subService: SubjectService) { }
  
      ngOnInit() {
          this.subService.getSubjects().then(subjects => this.subjects = subjects);
      }
      
      
      onRowSelect(event) {
          this.subject = this.cloneSubject(event.data);
          this.displayDialog = true;
      }

      showDialogToAdd(){
          this.displayDialog = true;
      }

      saveSubject(subject){
        console.log(">> saveSubjects: ", subject);
        let subs = [...this.subjects];
        this.subject = this.cloneSubject(subject);
        subs.push(this.subject);
        this.subjects = subs;
        
        this.displayDialog = false;
        this.subService.saveSubject(this.subject);
        this.subject = null;
      }

      deleteSubject(subject){
        console.log(">> deleteSubject: ", this.selectedSub);
        let index = this.findSelectedSubIndex();
        this.subjects = this.subjects.filter((val,i) => i!=index);
        this.displayDialog = false;
        this.selectedSub.isdeleted = true;
        this.subService.deleteSubject(this.selectedSub);
      }
    
      gotoListPage(){
          
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
      
      constructor( public subjectid?, public subject?, public desc?, public isdeleted=false) {
          
      }
  }