import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../iam/services/users.service";
import {Profile} from "../../../profiles/model/profile";
import {ProfilesService} from "../../../profiles/services/profiles.service";

@Component({
  selector: 'app-profile-of-user',
  templateUrl: './profile-of-user.component.html',
  styleUrls: ['./profile-of-user.component.css']
})
export class ProfileOfUserComponent implements OnInit {
  profile: Profile = new Profile();
  userData = true;
  editMode = false;

  constructor(private profilesService: ProfilesService) { }
  ngOnInit(): void {
    this.profile = this.profilesService.getAuthenticatedUser();
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
