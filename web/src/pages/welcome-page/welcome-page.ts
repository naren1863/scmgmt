import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-stud',
  templateUrl: './welcome-stud.html',
  styleUrls: ['./welcome-stud.css']
})
export class WelcomestudComponent implements OnInit {

  totalCost: number = 100;
  totalCostSpinner: number = 300;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onValueChanged(event) {
    console.log(event);
  }

  onLogin(){
    this.router.navigate(["main-page"]);
  }
}
