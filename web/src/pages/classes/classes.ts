import { Component, OnInit } from '@angular/core';
import {Class} from '../classes/class';
import {ClassService} from '../classes/classservice';
;
import {Validators,FormControl,FormGroup,
        FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Message,SelectItem} from 'primeng/primeng';

import {Subject} from '../subjects/subject';
import {Staff} from '../staffs/staff';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-classes',
  templateUrl: './classes.html',
  styleUrls: ['./classes.css']
})
export class ClassesComponent implements OnInit {
  
      displayDialog: boolean = false;
      class: Class = new PrimeClass();
      selectedClass: Class;
      selectedSubs: Subject[];
      newClass: boolean;
      classes: Class[];

      staticSubjects: Subject[];
      staticStaffs: Staff[];
      staffList: any[];
      subjectList: any[];
      selectedStaffId: String;
      
      userform: FormGroup;
      submitted = false;

     constructor(private fb: FormBuilder, private classService: ClassService)  {
       console.log(">> Constructor");
       this.staffList = [];
       this.subjectList = [];
      this.classService.getClasses().then(classes => this.classes = classes);
      
      this.classService.getSubjects().subscribe(res => {
        let eleArray = res.data;
        for(let ele of eleArray){
          this.subjectList.push({"label": ele['subject'], "value": ele});
        }
        console.log("<< Constructor", this.subjectList);

      });

      this.classService.getStaffs().subscribe(res => {
        let eleArray = res.data;
        for(let ele of eleArray){
          this.staffList.push({"label": ele['fullname'], "value": ele['staffid']});
        }
        console.log("<< Constructor", this.staffList);

      });
     
     }

    ngOnInit() {
          
      console.log(">> ngOnInit");
      console.log("-- ngOnInit", this.staticStaffs);
      console.log("-- ngOnInit", this.staticSubjects);

      // this.staticStaffs.forEach(ele => {
      //     this.staffList.push({"label": ele.fullname, "value": ele.staffid});
      // });

          this.userform = this.fb.group({
            'classname': new FormControl('', Validators.required),
            'classteacher': new FormControl('', Validators.required),
           'subjects': new FormControl([], Validators.compose([Validators.required]))
            
        });
         
        console.log("<< ngOnInit");
    }
    onSubmit(value){
      this.submitted = true;
      console.log(">> onSubmit", value);
    }
    onStaffSelection(event){
      console.log(">> onStaffSelection: event: ", event);
      console.log(">> onStaffSelection: ", this.selectedStaffId);
    }

    get diagnostic() { return JSON.stringify(this.userform.value); }
      
    showDialogToEdit(classInfo) {
      console.log(">> static subjects: ", this.staticSubjects);
      console.log(">> classInfo: ", classInfo);
      this.newClass = true;
      //this.class = new PrimeClass();
      this.displayDialog = true;
  }
      showDialogToAdd() {
          this.newClass = true;
          this.class = new PrimeClass();
          this.displayDialog = true;
      }
      
      save(classForm) {
          let classes = [...this.classes];
          if(this.newClass)
            classes.push(classForm);
          else
            classes[this.findSelectedCarIndex()] = this.class;
          
          this.classes = classes;
          this.class = null;
          this.displayDialog = false;
      }
      
      delete() {
          let index = this.findSelectedCarIndex();
          this.classes = this.classes.filter((val,i) => i!=index);
          this.class = null;
          this.displayDialog = false;
      }    
      
      onRowSelect(event) {
          this.newClass = false;
          //this.class = this.cloneClass(event.data);
          this.displayDialog = true;
      }
      
    //   cloneCar(c: Class): Class {
    //       let class = new PrimeClass();
    //       for(let prop in c) {
    //           class[prop] = c[prop];
    //       }
    //       return class;
    //   }
      
      findSelectedCarIndex(): number {
          return this.classes.indexOf(this.selectedClass);
      }

      getSubjects(event){
       
        let subs = "";
         let isFirst: Boolean = true;
        for(let prop of event){
          
          if(isFirst){
            subs += prop['subject'];
            isFirst = false;
          } else {
            subs += ", " + prop['subject'];
          }
        }
        return subs;
       }
  }
  
  class PrimeClass implements Class {
      
    constructor(
      classid?,
      classname?,
      classteacher?,
      public subjects=[]
      
    ) {}
}