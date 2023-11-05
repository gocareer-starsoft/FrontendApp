import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-of-setting',
  templateUrl: './menu-of-setting.component.html',
  styleUrls: ['./menu-of-setting.component.css']
})
export class MenuOfSettingComponent {
  constructor(private router: Router) { }

  signOut() {
    this.router.navigate(['']);
  }
}
