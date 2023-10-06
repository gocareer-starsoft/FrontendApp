import { Component, Input } from '@angular/core';
import {User} from "../../models/user.entity";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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
