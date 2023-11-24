import {Component, ViewChild} from '@angular/core';
import { FormControl } from "@angular/forms";
import { FloatLabelType } from "@angular/material/form-field";
import { Router } from "@angular/router";
import {InputOfEmailComponent} from "../../components/input-of-email/input-of-email.component";
import {InputOfPasswordComponent} from "../../components/input-of-password/input-of-password.component";
import {SignUpService} from "../../services/sign-up.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    isHidden: boolean = false;
    @ViewChild(InputOfEmailComponent) emailInput: InputOfEmailComponent | undefined;
    @ViewChild(InputOfPasswordComponent) passwordInput: InputOfPasswordComponent | undefined;
    floatLabelControl = new FormControl('auto' as FloatLabelType);
    signUpData: any;
    roles: string[] = ["ROLE_STUDENT"];

    constructor(private router: Router, private signUpService: SignUpService) { }

    signUp() {
        if (this.emailInput && this.passwordInput) {
            this.redirect();
            this.signUpData = { username: this.emailInput.email, password: this.passwordInput.password, roles: this.roles };
            console.log('signUpData:', this.signUpData);
            this.signUpService.create(this.signUpData).subscribe(
                (response: any) => {
                    console.log('Usuario autenticado:', response);
                    this.router.navigate(['/sign-in']).then(r => console.log('Redireccionando a /sign-in...'));
                },
                (error) => {
                    // Handle error
                    console.error('Error:', error);
                }
            );
        } else {
            console.error('Error: Email input or password input is undefined.');
        }
    }

    redirect() {
        const userType = this.floatLabelControl.value;

        if (userType === 'auto') {
            this.roles[0] = 'ROLE_STUDENT';
        } else if (userType === 'always') {
            this.roles[0] = 'ROLE_SPECIALIST';
            //this.router.navigate(['/dashboard']);
        }
    }

    onSignIn() {
        this.isHidden = true;
        setTimeout(() => {
            this.router.navigate(['/sign-in']);
        }, 500);
    }
}
