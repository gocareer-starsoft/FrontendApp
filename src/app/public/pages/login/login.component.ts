import {Component, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../student/models/user.entity";
import {PasswordInputComponent} from "../../components/password-input/password-input.component";
import {EmailInputComponent} from "../../components/email-input/email-input.component";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isHidden: boolean = false;
    @ViewChild(EmailInputComponent) emailInput: any;
    @ViewChild(PasswordInputComponent) passwordInput: any;
    users: Array<User> = [];

    constructor(private router: Router, private authService: AuthService) { }

    onLogin() {
        const email = this.emailInput.email;
        const password = this.passwordInput.password;
        this.authService.login(email, password);
        if (this.authService.isLoggedIn()) {
            this.router.navigate([`${this.authService.getAccessToken()}/home`]);
        }
    }

    onSignup() {
        this.isHidden = true;

        setTimeout(() => {
            this.router.navigate(['/signup']);
        }, 500);
    }
}
