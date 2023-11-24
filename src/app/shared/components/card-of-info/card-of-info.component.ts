import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card-of-info',
  templateUrl: './card-of-info.component.html',
  styleUrls: ['./card-of-info.component.css']
})
export class CardOfInfoComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() buttonText: string | undefined;
  @Input() pathForButton: string | undefined;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();
  public disabled: boolean = false;

  public onButtonClick(): void {
    this.disabled = true;
    this.buttonClick.emit();
  }
}
