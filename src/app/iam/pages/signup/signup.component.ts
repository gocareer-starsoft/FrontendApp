import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FloatLabelType} from "@angular/material/form-field";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isHidden: boolean = false;
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  constructor(private router: Router, private authService: AuthService) { }

  signUp() {
    const signUpData = {
      username: 'nuevoUsuario',
      password: 'nuevaContraseña',
      roles: ['rol1', 'rol2'],
    };

    this.authService.signUp(signUpData).subscribe((response) => {
      console.log('Usuario registrado con éxito:', response);
    });
  }

  redirect() {
    const userType = this.floatLabelControl.value;

    if (userType === 'auto') {
      this.router.navigate(['/home']);
    } else if (userType === 'always') {
      this.router.navigate(['/dashboard']);
    }
  }
  onSignIn() {
    this.isHidden = true;
    setTimeout(() => {
      this.router.navigate(['/signin']);
    }, 500);
  }
}
