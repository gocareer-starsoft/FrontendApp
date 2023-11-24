import {Component, Input, OnInit} from '@angular/core';
import {ResultsService} from "../../services/results.service";
import {Evaluation} from "../../model/evaluation";
import {EvaluationsService} from "../../services/evaluations.service";

@Component({
  selector: 'app-vocational-tests',
  templateUrl: './vocational-tests.component.html',
  styleUrls: ['./vocational-tests.component.css']
})
export class VocationalTestsComponent implements OnInit {
  @Input() evaluations: Array<Evaluation>=[]

  constructor(private evaluationsService: EvaluationsService) {}

  private getAllEvaluations(){
    this.evaluationsService.getAll().subscribe((response: any) => {
      this.evaluations = response.data
    });
  }

  ngOnInit(): void {
    this.getAllEvaluations()
  }
}
