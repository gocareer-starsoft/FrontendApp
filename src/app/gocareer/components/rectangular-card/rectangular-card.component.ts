import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rectangular-card',
  templateUrl: './rectangular-card.component.html',
  styleUrls: ['./rectangular-card.component.css']
})
export class RectangularCardComponent {
  @Input() imageUrl: string | undefined;
  @Input() textInfo: string | undefined;
}
