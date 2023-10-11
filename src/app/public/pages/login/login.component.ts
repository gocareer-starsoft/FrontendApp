import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../student/models/user.entity";
import {UsersService} from "../../services/users.service";
import {PasswordInputComponent} from "../../components/password-input/password-input.component";
import {EmailInputComponent} from "../../components/email-input/email-input.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isHidden: boolean = false;
    @ViewChild(EmailInputComponent) emailInput: any;
    @ViewChild(PasswordInputComponent) passwordInput: any;
    users: Array<User> = [];

    constructor(private router: Router, private usersServices: UsersService) { }

    onLogin() {
        console.log('login')
        const email = this.emailInput.email;
        console.log(email)
        const password = this.passwordInput.password;
        console.log(password)

        const isStudent = this.users.find((user) =>
            user.email === email && user.password === password && !user.specialist);

        const isSpecialist = this.users.find((user) =>
            user.email === email && user.password === password && user.specialist);

        if (isStudent) {
            this.router.navigate(['st/home']);
        } else if (isSpecialist) {
            this.router.navigate(['sp/home']);
        } else {
            console.log('Usuario no encontrado o contraseña incorrecta');
        }
    }

    onSignup() {
        this.isHidden = true;

        setTimeout(() => {
            this.router.navigate(['/signup']);
        }, 500);
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    private getAllUsers() {
        this.usersServices.getAll().subscribe((response: any) => {
            this.users = response;
        });
    }
}
