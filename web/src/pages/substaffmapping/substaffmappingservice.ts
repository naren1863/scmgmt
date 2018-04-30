import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from '../subjects/subject';
import { Class } from '../classes/class';
@Injectable()
export class SubstaffmappingService {

    constructor(private http: HttpClient) { }

    getClassSsections() {
      return this.http.get<any>('assets/showcase/data/class-section.json')
        .toPromise()
        .then(res => <Class[]>res.data)
        .then(data => { return data; });
      }

      async getSubjectsForClass(classId: String) {
        console.log("In getSubjectsForClass: " + classId);
        return await this.http.get<any>('assets/showcase/data/subjects/'+classId+'.json')
        .toPromise()
        .then(res => <Class[]>res.data)
        .then(data => { return data; });
          
        }   
}