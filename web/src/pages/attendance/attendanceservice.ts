import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Student } from '../students/student';
import { Subject } from '../subjects/subject';
import { Class } from '../classes/class';
import { ClassSchedule } from '../attendance/classschedule';

@Injectable()
export class AttendanceService {

    constructor(private http: HttpClient) { }

    getClassSchedule() {
      return this.http.get<any>('assets/showcase/data/attendance/ClassSchedule.json');
      // .toPromise()
      // .then(res => <ClassSchedule[]>res.data)
      // .then(data => {return data});
    }

    getStudents(classSectionId: String) {
      return this.http.get<any>('assets/showcase/data/students/'+ classSectionId + '.json');
    }

    getCalendar() {
      return this.http.get<any>('assets/showcase/data/attendance/CalendarTable.json');
    }

    getTime() {
      return this.http.get<any>('assets/showcase/data/attendance/TimeTable.json');
    }

      
}

