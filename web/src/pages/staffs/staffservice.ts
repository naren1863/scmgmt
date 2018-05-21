import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Staff } from '../staffs/staff';

@Injectable()
export class StaffService {

    constructor(private http: HttpClient) { }

    getStaffs() {
    return this.http.get<any>('assets/showcase/data/staffs.json')
      .toPromise()
      .then(res => <Staff[]>res.data)
      .then(data => { return data; });
    }

    saveStaff(staff) {
      console.log(">> Save Subjects In Service: ", staff);
      var theJSON = JSON.stringify(staff);
      console.log("-- stringify: ", theJSON);
        // var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
        
        // var a = document.createElement('a');
        // a.href = uri;
        // a.innerHTML = "Right-click and choose 'save as...'";
        // parent.document.body.appendChild(a);
      
    }

    deleteStaff(staff) {
      console.log(">> Delete Subjects");
      var theJSON = JSON.stringify(staff);
      console.log("-- stringify: ", theJSON);
        // var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
        
        // var a = document.createElement('a');
        // a.href = uri;
        // a.innerHTML = "Right-click and choose 'save as...'";
        // console.log("document: " , document);
        // document.body.appendChild(a);
    }
}