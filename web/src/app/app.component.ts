import { Component } from '@angular/core';
import { MenuItem} from 'primeng/primeng';
import { LoginService } from '../providers/login-service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private loginSerice: LoginService, private router: Router)
     {
        const name = 'Omega'.toLowerCase();
        document.getElementById('theme-css').setAttribute('href', 'assets/themes/' + name + '/theme.css');
        if (!loginSerice.isLoggedIn()){
          this.router.navigate(['/']);
      }
    }
  
}


