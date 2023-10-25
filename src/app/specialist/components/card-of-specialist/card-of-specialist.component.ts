import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-of-specialist',
  templateUrl: './card-of-specialist.component.html',
  styleUrls: ['./card-of-specialist.component.css']
})
export class CardOfSpecialistComponent {
  @Input() image : string | undefined
  @Input() textbutton : string | undefined
  @Input() pathforbutton : string | undefined
  @Input() text : string | undefined
}
