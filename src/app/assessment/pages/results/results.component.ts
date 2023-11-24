import {Component, Input, OnInit} from '@angular/core';
import {Career} from "../../model/result";
import {ResultsService} from "../../services/results.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  @Input() careers: Array<Career>=[]

  constructor(private careerService:ResultsService) {}

  private getAllCareers(){
    this.careerService.getAll().subscribe((response: any) => {
      this.careers = response
    });
  }

  ngOnInit(): void {
    this.getAllCareers()
  }
}
