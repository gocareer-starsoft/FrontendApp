import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-of-navigation',
  templateUrl: './menu-of-navigation.component.html',
  styleUrls: ['./menu-of-navigation.component.css']
})
export class MenuOfNavigationComponent {
  @Input() userType: string | undefined;
}
