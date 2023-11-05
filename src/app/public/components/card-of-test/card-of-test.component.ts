import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-of-test',
  templateUrl: './card-of-test.component.html',
  styleUrls: ['./card-of-test.component.css']
})
export class CardOfTestComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() amount: string | undefined;
}
