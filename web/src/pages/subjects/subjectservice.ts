import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

    saveSubject(subject): Observable<Subject> {
      console.log(">> Save Subjects In Service: ", subject);
      var theJSON = JSON.stringify(subject);
      console.log("-- stringify: ", theJSON);

        return this.http.post<Subject>('/ui/service/saveSubject', subject);
      
    }

    // public createInvoice(booking: BookingModel):  Observable<any> {
    //     return this.http.post('/ui/service/saveSubject', booking );
    // }

    deleteSubject(subject) {
      console.log(">> Delete Subjects");
      var theJSON = JSON.stringify(subject);
      console.log("-- stringify: ", theJSON);
        // var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
        
        // var a = document.createElement('a');
        // a.href = uri;
        // a.innerHTML = "Right-click and choose 'save as...'";
        // console.log("document: " , document);
        // document.body.appendChild(a);
    }
}