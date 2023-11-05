import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-of-user',
  templateUrl: './card-of-user.component.html',
  styleUrls: ['./card-of-user.component.css']
})
export class CardOfUserComponent {

  @Input() user : any | undefined
  @Input() userImage : string | undefined
}
