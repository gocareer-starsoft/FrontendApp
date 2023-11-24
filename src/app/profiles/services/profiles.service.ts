import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../model/profile";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService extends BaseService<Profile> {

  private isUser: Profile | undefined = new Profile();

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/profiles'
  }

  setAuthenticatedUser(profile: Profile) {
    this.isUser = profile;
  }
  getAuthenticatedUser(): Profile {
    return <Profile>this.isUser;
  }
}
