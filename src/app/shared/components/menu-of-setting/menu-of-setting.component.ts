import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../iam/services/auth.service";

@Component({
  selector: 'app-menu-of-setting',
  templateUrl: './menu-of-setting.component.html',
  styleUrls: ['./menu-of-setting.component.css']
})
export class MenuOfSettingComponent {
  constructor(private router: Router, private authService: AuthService) { }

  signOut() {
    this.router.navigate(['']).then(r => {
      console.log('Redireccionando a /login...')
      localStorage.removeItem('token');
    });
  }
}
