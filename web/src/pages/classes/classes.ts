import { Component, OnInit } from '@angular/core';
import {Class} from '../classes/class';
import {ClassService} from '../classes/classservice';
;
import {Validators,FormControl,FormGroup,
        FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Message,SelectItem} from 'primeng/primeng';
import {ConfirmationService} from 'primeng/primeng';

import {Subject} from '../subjects/subject';
import {Staff} from '../staffs/staff';
import { StaffsComponent } from '../staffs/staffs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.html',
  styleUrls: ['./classes.css']
})
export class ClassesComponent implements OnInit {
  
    msgs: Message[] = [];
    displayDialog: boolean = false;
    newClass: boolean = false;

    classInfo: Class = new PrimeClass();
    selectedClass: Class;
    classes: Class[];
    staticSubjects: Subject[];
    staticStaffs: Staff[];
    staffList: any[];
    subjectList: any[];
    userform: FormGroup;

  constructor(private fb: FormBuilder, 
                private confirmService: ConfirmationService, 
                private classService: ClassService)  
  {
    console.log(">> Constructor");
    this.staffList = [];
    this.subjectList = [];
    this.classService.getClasses().then(classes => this.classes = classes);

    this.classService.getSubjects().subscribe(res => {
      let eleArray = res.data;
      for(let ele of eleArray){
        this.subjectList.push({"label": ele['subject'], "value": ele});
      }
    });

    this.classService.getStaffs().subscribe(res => {
      let eleArray = res.data;
      for(let ele of eleArray){
      this.staffList.push({"label": ele.fullname, "value": ele});
      }
      console.log("-- Constructor", this.staffList);
    });
  }

  ngOnInit() {
    console.log(">><< ngOnInit");
    this.userform = this.fb.group({
      'classname': new FormControl('', Validators.required),
      'classteacher': new FormControl('', Validators.required),
      'subjects': new FormControl('', Validators.compose([Validators.required]))
    });
  }

  showDialogToEdit(classInfo) {
    console.log(">> showDialogToEdit: classInfo: ", classInfo);
    this.newClass = false;
    this.selectedClass = classInfo;
    this.userform = this.fb.group({
      'classname': new FormControl(classInfo.classname, Validators.required),
      'classteacher': new FormControl(classInfo.classteacher, Validators.required),
      'subjects': new FormControl(classInfo.subjects, Validators.compose([Validators.required]))
    });
    this.displayDialog = true;
  }
  
  showDialogToAdd() {
    this.newClass = true;
    this.classInfo = new PrimeClass();
    this.userform.reset();
    this.displayDialog = true;
  }
      
  save(classForm) {
    console.log(">> Saving Class: ", classForm);
    let classes = [...this.classes];
    if(this.newClass)
      classes.push(classForm);
    else
      classes[this.findSelectedClassIndex()] = classForm;

    this.classes = classes;
    
    this.classInfo = null;
    this.displayDialog = false;
    this.msgs = [{severity:'success', summary:'Saved', detail: classForm.classname + ' is saved'}];
  }
      
  delete(classInfo) {
    this.selectedClass = classInfo;
    this.confirmService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          let index = this.findSelectedClassIndex();
          this.classes = this.classes.filter((val,i) => i!=index);
          classInfo.deleted = true;

          let classes = [...this.classes];
          this.classInfo = this.cloneClass(classInfo);
          classes.push(this.classInfo);
          this.classes = classes;
          this.classService.deleteClass(classInfo);
          this.msgs = [{severity:'success', summary:'Deleted', detail: this.selectedClass.classname + ' is deleted'}];
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejected', detail:'Delete operation is cancelled'}];
      }
    });
  }    
      
  cloneClass(c: Class): Class {
    let clas = new PrimeClass();
    for(let prop in c) {
      clas[prop] = c[prop];
    }
    return clas;
  }
      
  findSelectedClassIndex(): number {
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
    public classteacher=null,
    public subjects=[],
    deleted? 
  ) {}
}