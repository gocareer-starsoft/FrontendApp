import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Career} from "../models/career.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CareersService extends BaseService<Career> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/careers'
  }
}
