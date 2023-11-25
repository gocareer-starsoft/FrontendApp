import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Meeting} from "../model/meeting";

@Injectable({
  providedIn: 'root'
})
export class MeetingsService extends BaseService<Meeting> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/meetings'
  }
}
