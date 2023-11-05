import {Component, Input, OnInit} from '@angular/core';
import {Career} from "../../model/career.entity";
import {CareersService} from "../../services/careers.service";

@Component({
  selector: 'app-career-options',
  templateUrl: './career-options.component.html',
  styleUrls: ['./career-options.component.css']
})
export class CareerOptionsComponent implements OnInit{
  @Input() careers: Array<Career>=[]

  constructor(private careerService:CareersService) {
  }

  private getAllCareers(){
    this.careerService.getAll().subscribe((response: any) => {
      this.careers=response
    });
  }

  ngOnInit(): void {
    this.getAllCareers()
  }
}
