import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isHidden: boolean = false;

  constructor(private router: Router) {}
  onSignup() {
    this.isHidden = true;

    setTimeout(() => {
      this.router.navigate(['/signup']);
    }, 500);
  }
}
