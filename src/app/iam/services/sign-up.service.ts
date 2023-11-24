import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUp} from "../model/sign-up";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class SignUpService extends BaseService<SignUp>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/authentication/sign-up'
  }
}
