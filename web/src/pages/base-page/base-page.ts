import { MenuItem} from 'primeng/primeng';
export class BasePage {

    constructor(){
    }
    items2: MenuItem[] = [
        {label: 'Omega', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Bootstrap', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Cupertino', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Cruze', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Darkness', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Flick', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Home', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Kasper', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Lightness', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Ludvig', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Pepper-Grinder', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Redmond', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Rocket', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'South-Street', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Start', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Trontastic', icon: 'fa-plus', command: (event) => this.onClick(event)},
        {label: 'Voclain', icon: 'fa-plus', command: (event) => this.onClick(event)}
      ];
  
    onClick(event) {
      const name = event.item.label.toLowerCase();
      document.getElementById('theme-css').setAttribute('href', 'assets/themes/' + name + '/theme.css');
    }
}
