import { Component } from '@angular/core';
import { MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor() {
      const name = 'Ludvig'.toLowerCase();
      document.getElementById('theme-css').setAttribute('href', 'assets/themes/' + name + '/theme.css');
    }
  
}


