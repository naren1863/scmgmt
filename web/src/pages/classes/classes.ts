import { Component, OnInit } from '@angular/core';
import {Class} from '../classes/class';
import {ClassService} from '../classes/classservice';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.html',
  styleUrls: ['./classes.css']
})
export class ClassesComponent implements OnInit {
  
      displayDialog: boolean;
      car: Class = new PrimeClass();
      selectedCar: Class;
      
      newCar: boolean;
  
      cars: Class[];
  
      constructor(private carService: ClassService) { }
  
      ngOnInit() {

        console.log("ClassesComponent: Before calling service");
        console.log(this.cars);
        this.carService.getClassSsections().then(cars => this.cars = cars);
        console.log("ClassesComponent: After calling service");

        
         let car = new PrimeClass();
          for(let prop in this.cars) {
              console.log("For Loop!!");
          }
    console.log("ClassesComponent: End");

         // this.carService.getClassSsections().then(cars => this.cars = cars);
      }
      
      showDialogToAdd() {
          this.newCar = true;
          this.car = new PrimeClass();
          this.displayDialog = true;
      }
      
      save() {
          let cars = [...this.cars];
          if(this.newCar)
              cars.push(this.car);
          else
              cars[this.findSelectedCarIndex()] = this.car;
          
          this.cars = cars;
          this.car = null;
          this.displayDialog = false;
      }
      
      delete() {
          let index = this.findSelectedCarIndex();
          this.cars = this.cars.filter((val,i) => i!=index);
          this.car = null;
          this.displayDialog = false;
      }    
      
      onRowSelect(event) {
          this.newCar = false;
          this.car = this.cloneCar(event.data);
          this.displayDialog = true;
      }
      
      cloneCar(c: Class): Class {
          let car = new PrimeClass();
          for(let prop in c) {
              car[prop] = c[prop];
          }
          return car;
      }
      
      findSelectedCarIndex(): number {
          return this.cars.indexOf(this.selectedCar);
      }
  }
  
  class PrimeClass implements Class {
      
      constructor(public classsectionid?,public facultyid?, public stream?, public grade?, public section?, public code?) {}
  }