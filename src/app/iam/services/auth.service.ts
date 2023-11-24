import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UsersService} from "./users.service";
import {User} from "../model/user.entity";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: Array<User> = [];
  private isAuthenticated: boolean = false;
  private userType: 'student' | 'specialist' = 'student';
  private isUser: User | undefined = new User();

  constructor(private http: HttpClient, private usersService: UsersService) {
    this.usersService.getAll().subscribe(
      (response: any) => {
        this.users = response;
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );

  }
  /*
  login(email: string, password: string) {

    this.isUser = this.users.find((user) =>
        user.email === email && user.password === password);

    if (this.isUser) {
      this.userType = this.isUser.specialist ? 'specialist' : 'student';
      console.log(this.userType);
      this.isAuthenticated = true;
      this.usersService.setAuthenticatedUser(this.isUser);
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserType(): string {
    console.log(this.userType);
    return this.userType;
  }
  */
}
