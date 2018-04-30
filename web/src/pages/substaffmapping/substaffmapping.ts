import { Component, OnInit } from '@angular/core';
import {Class} from '../classes/class';
import { Subject } from '../subjects/subject';
import { SubstaffMapper } from '../substaffmapping/substaffmapper';

import { Observable } from "rxjs/Rx";
import {SubstaffmappingService} from '../substaffmapping/substaffmappingservice';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-substaffmapping',
  templateUrl: './substaffmapping.html',
  styleUrls: ['./substaffmapping.css']
})
export class SubstaffmappingComponent implements OnInit {



    displayDialog: boolean;
      classSection: Class = new PrimeClass();
      selectedClassSec: String;
      classSections: Class[];
      classSectionList: any[];

      subjects: Subject[];
      subStaffMappers: SubstaffMapper[];
      substaffMapper: SubstaffMapper;


      constructor(private subStaffService: SubstaffmappingService, private http: HttpClient) { }

      ngOnInit() {
        console.log("SubstaffmappingComponent: Before calling service");
        console.log(this.classSections);
          this.subStaffService.getClassSsections().then(classSections => this.classSections = classSections);
        console.log("SubstaffmappingComponent: After calling service");
        console.log("SubstaffmappingComponent: End");
      }

      loadClassSections(){
        this.classSectionList=[];
        this.classSectionList.push({label:'Select Class', value:null});
          if(this.classSections && this.classSections.length > 0){
            this.classSections.forEach(element => {
                this.classSectionList.push({label: element.code, value: element.facultyid})
            });
          }
      }

      loadSubjectsForClass(){
        console.log("loadSubjectsForClass ");

        
           Observable.create(observer => {
             this.http.get<any>('assets/showcase/data/subjects/'+this.selectedClassSec+'.json')
            .finally(observer.complete())
            .subscribe(data => {
              let jsonRes = data.json();
              console.log("In subscribe: " + jsonRes);
              observer(data.token);
             }, 
              error => {
                observer.error(error);
                console.log(error)}
            ).closed;
          });


          // this.http.get<any>('assets/showcase/data/subjects/'+this.selectedClassSec+'.json')
            
          //   .subscribe((data: Subject[]) => {
          //     let jsonRes = data.keys;
          //     console.log("In subscribe: " + jsonRes);
          //     // jsonRes.forEach(element => {
          //     //   console.log("For: " + element);
          //     // });
             
          //    }, 
          //     error => {
               
          //       console.log(error)}
          //   );
        
        
        
          
      //  this.subStaffService.getSubjectsForClass(this.selectedClassSec).then(subjects=> this.subjects = subjects);
      //   console.log(this.subjects);
      //   if(this.subjects && this.subjects.length > 0){
      //     this.subjects.forEach(data => {
      //        this.subStaffMappers.push(new PrimeSubjstaffMapper(data.subject, data.grade));
      //        console.log("For Loop Working: " + data.subject);
      //     });
          
      //   }
        
        
      }


}

class PrimeClass implements Class {

      constructor(public classsectionid?,public facultyid?, public stream?, public grade?, public section?, public code?) {}
  }

  class PrimeSubjstaffMapper implements SubstaffMapper {

    constructor(public subject?,public subjectid?, public staffid?, public staffname?) {}
    
}

