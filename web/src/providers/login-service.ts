import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    logged: boolean = false;
    username: string ="";
    isLoggedIn() {
        return this.logged;
    }

    setLogin(loggedIn){
        this.logged = loggedIn;
    }

    getUserName(){

    }
}
