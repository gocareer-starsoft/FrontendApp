import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Career} from "../model/result";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ResultsService extends BaseService<Career> {

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/results'
  }
}
