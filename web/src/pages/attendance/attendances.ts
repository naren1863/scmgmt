import { Component, OnInit } from '@angular/core';
import {AttendanceService} from './attendanceservice';
import { ClassSchedule } from './classschedule';
import { CalendarObj } from './calendarobj';
import { Student } from '../students/student';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.html',
  styleUrls: ['./attendance.css']
})
export class AttendanceComponent implements OnInit {

  classSchedules: ClassSchedule[];
  calendars: CalendarObj[];
  students: Student[];

  staffList: any[];
  classList: any[];
  subjectList: any[];
  calendarList: any[];

  selectedStaffId: String;
  selectedClassId: String;
  selectedSubjectId: String;
  selectedCalendarId: String;

  dateValue: Date;
  minDateValue: Date;
  maxDateValue: Date;
  invalidDates: Date[];

  caleMap: Map<String, String>;  
  timeMap: Map<String, String>;  
  constructor(private service: AttendanceService) {

   }

  ngOnInit() {
    console.log(">> AttendanceComponent: ngOnInit");
    this.loadClassSchedules(); 
    this.loadCalendarTable();
    this.loadTimeTable();
        
    console.log("<< AttendanceComponent: ngOnInit");    
  }

  loadCalendarTable(){
    this.caleMap = new Map<String, String>();
    this.service.getCalendar().subscribe(res => {
      for(let entry of res.data){
        this.caleMap.set(entry.calendarid, entry.date);
      }
    });
  }

  loadTimeTable(){
    this.timeMap = new Map<String, String>();
    this.service.getTime().subscribe(res => {
      for(let entry of res.data){
        this.timeMap.set(entry.timeid, entry.hour +":"+ entry.minute);
      }
    });
  }

  loadClassSchedules(){
    this.staffList = [];
    this.service.getClassSchedule().subscribe(classScheds => {
      let staffMap = new Map();
      this.classSchedules = classScheds.data;
      for(let ele of classScheds.data){
        staffMap.set(ele.staffname, ele.staffid);
      }
      for(var [key, value] of Array.from(staffMap.entries())){
        this.staffList.push({"label": key, "value": value});
      }
    });
  }

  loadClasses(){
    this.classList = [];
    this.classList.push({"label": "-- Select Classes --", "value": null});
    this.classSchedules.forEach(ele => {
        if(ele.staffid == this.selectedStaffId){
          this.classList.push({"label": ele.classcode, "value": ele.classsectionid});
        }
    });
  }

  loadSubjects(){
    this.subjectList = [];
    let subMap = new Map();
    this.subjectList.push({"label": "-- Select Subjects --", "value": null});
    this.classSchedules.forEach(ele => {
        if(ele.classsectionid == this.selectedClassId){
          subMap.set(ele.subjectid, ele.subjectid);
        }
    });
    for(var [key, value] of Array.from(subMap.entries())){
      this.subjectList.push({"label": key, "value": value});
    }
  }

  loadCalendars(){
    this.calendarList = [];
    let calObjectSet = new Set<CalendarObj>();
    this.calendarList.push({"label": "-- Select Calender --", "value": null});
    this.classSchedules.forEach(ele => {
        if(ele.classsectionid == this.selectedClassId 
                && ele.subjectid == this.selectedSubjectId){
         calObjectSet.add(new PrimeCalendar(ele.classscheduleid, ele.calendarid, null, ele.starttimeid, null));
        }
    });
    
    for(let entry of Array.from(calObjectSet)){
      let entrydate = new Date(this.caleMap.get(entry.calendarid).toString());
      let maxDate = new Date();
      let minDate = new Date();
      minDate.setDate(maxDate.getDate() - 3);
      if(entrydate >= minDate && entrydate <= maxDate){
        let labelStr: String = this.caleMap.get(entry.calendarid) + " " + this.timeMap.get(entry.timeid);
        this.calendarList.push({"label": labelStr, "value": entry.classscheduleid}); 
      }
    }
  }

  loadStudentsForClass(){
    this.service.getStudents(this.selectedClassId).subscribe(res => {
     this.students = [];
     for(let entry of res.data){
         this.students.push(new PrimeStudent(entry.studentid, entry.fname, entry.lname));
     }
     //this.students.forEach(ele => { console.log("--> ", ele)});
    });
   }

   selectedStuds: Student[];
   recordAttendance(){
     console.log(this.selectedStuds);
   }
}

 class PrimeClassSchedule implements ClassSchedule {
  constructor(
    public classscheduleid?,
    public staffname?,
    public staffid?,
    public calendarid?,
    public starttimeid?,
    public classsectionid?,
    public classcode?,
    public subjectid?
  ){}
}

class PrimeCalendar implements CalendarObj {
  constructor(
    public classscheduleid?,
    public calendarid?,
    public date?,
    public timeid?,
    public time?
  ){}
}

class PrimeStudent implements Student {
  constructor(
    public studentid?,
    public fname?,
    public lname?,
    public standard?,
    public dob?,
    public mail?,
    public mobile?,
    public parentid?
  ){}
}


