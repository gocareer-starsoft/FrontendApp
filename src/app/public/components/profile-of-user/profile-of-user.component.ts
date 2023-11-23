import {Component, OnInit} from '@angular/core';
import {User} from "../../../iam/model/user.entity";
import {UsersService} from "../../../iam/services/users.service";

@Component({
  selector: 'app-profile-of-user',
  templateUrl: './profile-of-user.component.html',
  styleUrls: ['./profile-of-user.component.css']
})
export class ProfileOfUserComponent implements OnInit {
  user: User = new User();
  userData = true;
  editMode = false;

  constructor(private usersServices: UsersService) { }
  ngOnInit(): void {
    this.user = this.usersServices.getAuthenticatedUser();
  }
  editData() {
    this.editMode = true;
    this.userData = false;
  }
  saveProfile() {
    this.editMode = false;
    this.userData = true;
  }
}
