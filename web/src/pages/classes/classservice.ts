import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Class } from '../classes/class';

@Injectable()
export class ClassService {

    constructor(private http: HttpClient) { }

    getClassSsections() {
    return this.http.get<any>('assets/showcase/data/class-section.json')
      .toPromise()
      .then(res => <Class[]>res.data)
      .then(data => { return data; });
    }

    getCarsMedium() {
    return this.http.get<any>('assets/showcase/data/stream-grade-subject.json')
      .toPromise()
      .then(res => <Class[]>res.data)
      .then(data => { return data; });
    }

    getCarsLarge() {
    return this.http.get<any>('assets/showcase/data/cars-large.json')
      .toPromise()
      .then(res => <Class[]>res.data)
      .then(data => { return data; });
    }

  getCarsHuge() {
    return this.http.get<any>('assets/showcase/data/cars-huge.json')
      .toPromise()
      .then(res => <Class[]>res.data)
      .then(data => { return data; });
  }
}