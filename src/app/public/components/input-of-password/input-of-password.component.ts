import {Component} from '@angular/core';

@Component({
  selector: 'app-input-of-password',
  templateUrl: './input-of-password.component.html',
  styleUrls: ['./input-of-password.component.css']
})
export class InputOfPasswordComponent {
  hide = true;
  password: string = '';
}
