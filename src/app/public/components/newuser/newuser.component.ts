import {Component, Input} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})

export class NewuserComponent {
  hide = true;
  @Input() user: User;

  constructor() {
    this.user={} as User;
  }
}
