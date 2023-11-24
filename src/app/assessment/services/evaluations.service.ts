import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "../../shared/services/base.service";
import {Evaluation} from "../model/evaluation";

@Injectable({
  providedIn: 'root'
})
export class EvaluationsService extends BaseService<Evaluation>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint='/evaluations'
  }
}
