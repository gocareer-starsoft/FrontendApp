import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-talks-card',
  templateUrl: './talks-card.component.html',
  styleUrls: ['./talks-card.component.css']
})
export class TalksCardComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() date: string | undefined;
}
