import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FloatLabelType } from "@angular/material/form-field";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    isHidden: boolean = false;
    floatLabelControl = new FormControl('auto' as FloatLabelType);
    username: string = 'u202121875';
    password: string = '123456';
    roles: string[] = ['ROLE_STUDENT'];

    constructor(private router: Router, private authService: AuthService) { }

    signUp() {
        console.log('username:', this.username, 'password:', this.password, 'roles:', this.roles);
        this.authService.create({
            username: this.username,
            password: this.password,
            roles: this.roles
        }).subscribe(
            (response: any) => {
                console.log('Usuario autenticado:', response);
                this.redirect();
            },
            (error) => {
                // Handle error
                console.error('Error:', error);
            }
        );
    }

    redirect() {
        const userType = this.floatLabelControl.value;

        if (userType === 'auto') {
            this.roles[0] = 'student';
            this.router.navigate(['/home']);
        } else if (userType === 'always') {
            this.roles[0] = 'specialist';
            this.router.navigate(['/dashboard']);
        }
    }

    onSignIn() {
        this.isHidden = true;
        setTimeout(() => {
            this.router.navigate(['/sign-in']);
        }, 500);
    }
}
