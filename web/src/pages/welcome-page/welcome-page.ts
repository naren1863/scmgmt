import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from '../../providers/login-service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrls: ['./welcome-page.css']
})
export class WelcomestudComponent implements OnInit {

  totalCost: number = 100;
  totalCostSpinner: number = 300;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onValueChanged(event) {
    console.log(event);
  }

  onLogin(){
    this.loginService.setLogin(true);
    this.router.navigate(["main-page"]);
  }
}
