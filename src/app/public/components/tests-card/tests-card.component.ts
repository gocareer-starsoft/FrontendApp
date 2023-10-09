import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tests-card',
  templateUrl: './tests-card.component.html',
  styleUrls: ['./tests-card.component.css']
})
export class TestsCardComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() amount: string | undefined;
}
