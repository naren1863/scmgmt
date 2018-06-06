import { Component, OnInit } from '@angular/core';

import { Message } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from '../../providers/login-service';
import {User} from '../welcome-page/user';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.html',
  styleUrls: ['./welcome-page.css']
})
export class WelcomestudComponent implements OnInit {

  loginUser: User = new PrimeUser();
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  onValueChanged(event) {
    console.log(event);
  }

  onLogin(){
    console.log("onLogin: ", this.loginUser);
    this.loginService.authenticate(this.loginUser);
    console.log("onLogin:logged? ", this.loginService.isLoggedIn());
    if(this.loginService.isLoggedIn()){
      this.router.navigate(["main-page"]);
    }
    
  }
}

class PrimeUser implements User {
  constructor(public username?, public password?){}
}

