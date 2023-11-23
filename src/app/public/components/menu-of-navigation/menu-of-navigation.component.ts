import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-of-navigation',
  templateUrl: './menu-of-navigation.component.html',
  styleUrls: ['./menu-of-navigation.component.css']
})
export class MenuOfNavigationComponent implements OnInit {
  @Input() userType: string | undefined;
  firstRoute: string = "home";
  secondRoute: string = "vocational-tests";
  thirdRoute: string = "vocational-events";

  ngOnInit(): void {
    if (this.userType === "student") {
      this.firstRoute = "home";
      this.secondRoute = "vocational-tests";
      this.thirdRoute = "vocational-events";
    } else {
      this.firstRoute = "dashboard";
      this.secondRoute = "create-evaluation";
      this.thirdRoute = "create-event";
    }
  }
}
