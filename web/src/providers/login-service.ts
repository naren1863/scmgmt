import { Injectable } from '@angular/core';
import {User} from '../pages/welcome-page/user';
import { Globals } from 'app/global';

@Injectable()
export class LoginService {

    logged: boolean = false;
    username: string ="";
    loggedInUser: string;
    isLoggedIn() {
        return this.logged;
    }

    setLogin(loggedIn){
        this.logged = loggedIn;
    }
    
    authenticate(user: User){
        console.log("LoggedIn User: ", user);
        if(user.username == 'admin' && user.password == 'admin'){
            console.log("LoggedIn User: Success");
            this.setLogin(true);
            
        } else if(user.username == 'user' && user.password == 'user'){
            console.log("LoggedIn User: Success");
            this.setLogin(true);
            this.loggedInUser = user.username;
          
        } else {
            this.setLogin(false);
        }
        Globals.setLoggedInUser(user.username);
        
    }

    getUserName(){

    }
}
