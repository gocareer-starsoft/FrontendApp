import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-of-talk',
  templateUrl: './card-of-talk.component.html',
  styleUrls: ['./card-of-talk.component.css']
})
export class CardOfTalkComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() date: string | undefined;
}
