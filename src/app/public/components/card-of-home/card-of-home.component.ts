import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-of-home',
  templateUrl: './card-of-home.component.html',
  styleUrls: ['./card-of-home.component.css']
})
export class CardOfHomeComponent {
  @Input() imageUrl: string | undefined;
  @Input() textInfo: string | undefined;
}
