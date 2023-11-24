import {Component, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../model/user.entity";
import {InputOfPasswordComponent} from "../../components/input-of-password/input-of-password.component";
import {InputOfEmailComponent} from "../../components/input-of-email/input-of-email.component";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    isHidden: boolean = false;
    @ViewChild(InputOfEmailComponent) emailInput: any;
    @ViewChild(InputOfPasswordComponent) passwordInput: any;
    users: Array<User> = [];

    constructor(private router: Router, private authService: AuthService) { }

    signIn() {
      const signInCredentials = {
        username: 'upc',
        password: '3892',
      };

      this.authService.signIn(signInCredentials).subscribe((response) => {
        console.log('Usuario autenticado:', response);
        localStorage.setItem('token', response.token);
      });
    }

    onSignup() {
        this.isHidden = true;

        setTimeout(() => {
            this.router.navigate(['/signup']);
        }, 500);
    }
}
