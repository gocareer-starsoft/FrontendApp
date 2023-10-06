import {Component, Input} from '@angular/core';
import {Career} from "../../models/career.entity";

@Component({
  selector: 'app-career-options',
  templateUrl: './career-options.component.html',
  styleUrls: ['./career-options.component.css']
})
export class CareerOptionsComponent {
  @Input() careers: Array<Career>=[]
}
