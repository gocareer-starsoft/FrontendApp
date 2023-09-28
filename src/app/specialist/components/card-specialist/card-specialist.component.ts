import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-specialist',
  templateUrl: './card-specialist.component.html',
  styleUrls: ['./card-specialist.component.css']
})
export class CardSpecialistComponent {
  @Input() image : string | undefined
  @Input() textbutton : string | undefined
  @Input() pathforbutton : string | undefined
  @Input() text : string | undefined
}
