import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Student } from '../students/student';

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) { }

    getStudents() {
        return this.http.get<any>('assets/showcase/data/students.json')
          .toPromise()
          .then(res => <Student[]>res.data)
          .then(data => { return data; });
    }

    getClassSections() {
        return this.http.get<any>('assets/showcase/data/class-section.json')
          .toPromise()
          .then(res => <Student[]>res.data)
          .then(data => { return data; });
    }
}