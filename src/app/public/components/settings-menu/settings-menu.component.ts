import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent {
  constructor(private router: Router) { }

  signOut() {
    this.router.navigate(['']);
  }
}
