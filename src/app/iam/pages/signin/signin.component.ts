import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { InputOfPasswordComponent } from "../../components/input-of-password/input-of-password.component";
import { InputOfEmailComponent } from "../../components/input-of-email/input-of-email.component";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    isHidden: boolean = false;
    @ViewChild(InputOfEmailComponent) emailInput: InputOfEmailComponent | undefined;
    @ViewChild(InputOfPasswordComponent) passwordInput: InputOfPasswordComponent | undefined;
    signInData: any;

    constructor(private router: Router, private authService: AuthService) {}

    signIn() {
        if (this.emailInput && this.passwordInput) {
            this.signInData = { username: this.emailInput.email, password: this.passwordInput.password };
            console.log('signInData:', this.signInData);
            this.authService.create(this.signInData).subscribe(
                (response: any) => {
                    console.log('Usuario autenticado:', response);
                    localStorage.setItem('token', response.token);
                    this.router.navigate(['/home']).then((r) => console.log('Redireccionando a /home...'));
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

    onSignup() {
        this.isHidden = true;
        setTimeout(() => {
            this.router.navigate(['/sign-up']);
        }, 500);
    }
}
