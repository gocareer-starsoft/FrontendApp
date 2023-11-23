import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../iam/services/auth.service";

@Component({
  selector: 'app-bar-of-navigation',
  templateUrl: './bar-of-navigation.component.html',
  styleUrls: ['./bar-of-navigation.component.css']
})
export class BarOfNavigationComponent implements OnInit {
  userType: string = "student";
  firstRoute: string = "home";
  secondRoute: string = "vocational-tests";
  thirdRoute: string = "vocational-events";

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.getUserType() === "specialist") {
      console.log(this.userType, "sp");
      this.firstRoute = "dashboard";
      this.secondRoute = "create-evaluation";
      this.thirdRoute = "create-event";
    }
  }
}
