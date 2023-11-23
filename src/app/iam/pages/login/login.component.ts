import {Component, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../model/user.entity";
import {InputOfPasswordComponent} from "../../../public/components/input-of-password/input-of-password.component";
import {InputOfEmailComponent} from "../../../public/components/input-of-email/input-of-email.component";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isHidden: boolean = false;
    @ViewChild(InputOfEmailComponent) emailInput: any;
    @ViewChild(InputOfPasswordComponent) passwordInput: any;
    users: Array<User> = [];

    constructor(private router: Router, private authService: AuthService) { }

    onLogin() {
        const email = this.emailInput.email;
        const password = this.passwordInput.password;
        this.authService.login(email, password);
        if (this.authService.isLoggedIn()) {
            this.router.navigate([
              this.authService.getUserType() === 'student' ? `/home` : `/dashboard`
            ]);
        }
    }

    onSignup() {
        this.isHidden = true;

        setTimeout(() => {
            this.router.navigate(['/signup']);
        }, 500);
    }
}
