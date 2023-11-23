import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {User} from "../model/user.entity";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {

  private isUser: User | undefined = new User();

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/users'
  }

  setAuthenticatedUser(user: User) {
    this.isUser = user;
  }
  getAuthenticatedUser(): User {
    return <User>this.isUser;
  }
}
