import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Class } from '../classes/class';
import { Subject } from '../subjects/subject';
import {Staff} from '../staffs/staff';
@Injectable()
export class ClassService {

    constructor(private http: HttpClient) { }

    getClasses() {
    return this.http.get<any>('assets/showcase/data/class-section.json')
      .toPromise()
      .then(res => <Class[]>res.data)
      .then(data => { return data; });
    }

    getSubjects() {
      return this.http.get<any>('assets/showcase/data/subjects.json');
        // .toPromise()
        // .then(res => <Subject[]>res.data)
        // .then(data => { return data; });
      }

      getStaffs() {
        return this.http.get<any>('assets/showcase/data/staffs.json');
          // .toPromise()
          // .then(res => <Staff[]>res.data)
          // .then(data => { return data; });
        }
    
}