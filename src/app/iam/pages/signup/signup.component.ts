import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FloatLabelType} from "@angular/material/form-field";
import {Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isHidden: boolean = false;
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  constructor(private router: Router) { }

  onCreateAccountClick() {
    const userType = this.floatLabelControl.value;

    if (userType === 'auto') {
      this.router.navigate(['/st/home']);
    } else if (userType === 'always') {
      this.router.navigate(['/sp/home']);
    }
  }
  onLogin() {
    this.isHidden = true;
    setTimeout(() => {
      this.router.navigate(['/signin']);
    }, 500);
  }
}
