import { Component, OnInit } from '@angular/core';
import {Class} from '../classes/class';
import { Subject } from '../subjects/subject';
import { SubstaffMapper } from '../substaffmapping/substaffmapper';

import { Observable } from "rxjs/Rx";
import {SubstaffmappingService} from '../substaffmapping/substaffmappingservice';
import { HttpClient } from '@angular/common/http';
import {ListboxModule} from 'primeng/primeng';
import {DataTable} from 'primeng/primeng';

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
      staffs: any[];
      staffList: any[];

      subjects: Subject[];
      subStaffMappers: SubstaffMapper[];
      substaffMapper: SubstaffMapper;

      constructor(private subStaffService: SubstaffmappingService, private http: HttpClient) { }

      ngOnInit() {
          console.log(">> SubstaffmappingComponent ngOnInit");
          this.subStaffService.getClassSsections().then(classSections => this.classSections = classSections);
          this.subStaffService.getStaffs().then(staffs => this.staffs = staffs);
          console.log("<< SubstaffmappingComponent ngOnInit");
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

      onRowSelect(event){
          console.log(event);
          if(event && event.data)
            console.log("Data coming: " + event.data.subject);
      }

      loadSubjectsForClass(){
       this.subStaffService.getSubjectsForClass(this.selectedClassSec).subscribe(res => {
        this.subStaffMappers = [];
        for(let entry of res.data){
            this.subStaffMappers.push(new PrimeSubjstaffMapper(entry.subject, entry.subjectid));
        }
       });
      }

      getStaffNames(){
          this.staffList = [];
          this.staffList.push({label: "--Select Staff--", value: null});
          this.staffs.forEach(element =>{
              this.staffList.push({label: element.fname, value: element.staffid});
              //console.log(element.fname);
              
            });
          return this.staffList;  
      }

      update(dt: DataTable){

        dt.dataToRender
        var theJSON = JSON.stringify(dt.dataToRender);
        var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
        
        var a = document.createElement('a');
        a.href = uri;
        a.innerHTML = "Right-click and choose 'save as...'";
        document.body.appendChild(a);
        //   dt.dataToRender.forEach((ele: PrimeSubjstaffMapper) => {
        //     if(ele.staffid)
        //         console.log(ele.staffid, ele.subject, ele.subjectid); 
                
        //           var theJSON = JSON.stringify(ele);
        //           var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
                  
        //           var a = document.createElement('a');
        //           a.href = uri;
        //           a.innerHTML = "Right-click and choose 'save as...'";
        //           document.body.appendChild(a);
        //   });
       console.log(dt); 
       
      }
}

class PrimeClass implements Class {

      constructor(public classsectionid?,public facultyid?, public stream?, public grade?, public section?, public code?) {}
  }

  class PrimeSubjstaffMapper implements SubstaffMapper {

    constructor(public subject?,public subjectid?, public staffid?, public staffname?) {}
    
}

