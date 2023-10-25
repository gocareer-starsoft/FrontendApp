import { Component, Input } from '@angular/core';
import {User} from "../../model/user.entity";

@Component({
  selector: 'app-profile-of-user',
  templateUrl: './profile-of-user.component.html',
  styleUrls: ['./profile-of-user.component.css']
})
export class ProfileOfUserComponent {
  user: User = new User();

  userData = true;
  editMode = false;
  editData() {
    this.editMode = true;
    this.userData = false;
  }
  saveProfile() {
    this.editMode = false;
    this.userData = true;
  }
}
