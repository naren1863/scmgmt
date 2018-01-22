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
}