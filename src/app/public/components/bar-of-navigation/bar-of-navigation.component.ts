import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-bar-of-navigation',
  templateUrl: './bar-of-navigation.component.html',
  styleUrls: ['./bar-of-navigation.component.css']
})
export class BarOfNavigationComponent {
  constructor(private authService: AuthService) {
  }
  userType: string = "/" + this.authService.getAccessToken();
}
