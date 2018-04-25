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
      
      cloneSubject(c: Subject): Subject {
          let sub = new PrimeSubject();
          for(let prop in c) {
              sub[prop] = c[prop];
          }
          return sub;
      }
      
 }
  
  class PrimeSubject implements Subject {
      
      constructor( public stream?, public grade?, public subject?) {}
  }