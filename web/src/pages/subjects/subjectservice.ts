import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from '../subjects/subject';

@Injectable()
export class SubjectService {

    constructor(private http: HttpClient) { }

    getSubjects() {
    return this.http.get<any>('assets/showcase/data/subjects.json')
      .toPromise()
      .then(res => <Subject[]>res.data)
      .then(data => { return data; });
    }
}