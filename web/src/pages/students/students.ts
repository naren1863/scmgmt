import { Component, OnInit } from '@angular/core';
import {Student} from '../students/student';
import {StudentService} from '../students/studentservice';
@Component({
  selector: 'app-students',
  templateUrl: './students.html',
  styleUrls: ['./students.css']
})
export class StudentsComponent implements OnInit {

      displayDialog: boolean;
      student: Student = new PrimeStudent();
      selectedStud: Student;
      students: Student[];
  
      constructor(private subService: StudentService) { }
  
      ngOnInit() {
          this.subService.getStudents().then(students => this.students = students);
      }
      
      
      onRowSelect(event) {
          
          this.student = this.cloneSubject(event.data);
          this.displayDialog = true;
      }
      
      cloneSubject(c: Student): Student {
          let sub = new PrimeStudent();
          for(let prop in c) {
              sub[prop] = c[prop];
          }
          return sub;
      }
      
 }
  
  class PrimeStudent implements Student {
      
      constructor(public fname?, public lname?, public standard?) {}
  }