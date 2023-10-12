import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from "./users.service";
import {User} from "../../student/models/user.entity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: Array<User> = [];
  private isAuthenticated: boolean = false;
  private userType: 'student' | 'specialist' = 'student';

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.usersService.getAll().subscribe((response: any) => {
      this.users = response;
    });
  }

  login(email: string, password: string) {

    const isUser = this.users.find((user) =>
        user.email === email && user.password === password);

    if (isUser) {
      this.userType = isUser?.specialist ? 'specialist' : 'student';
      this.isAuthenticated = true;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserType(): 'student' | 'specialist' {
    return this.userType;
  }

  getAccessToken(): 'st' | 'sp' {
    return this.userType === 'student' ? 'st' : 'sp';
  }
}
