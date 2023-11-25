import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SignIn} from "../model/sign-in";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends BaseService<SignIn>{
    constructor(http: HttpClient) {
      super(http);
      this.resourceEndpoint='/authentication/sign-in'
    }
}
