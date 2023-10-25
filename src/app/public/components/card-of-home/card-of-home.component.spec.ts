import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfHomeComponent } from './card-of-home.component';

describe('RectangularCardComponent', () => {
  let component: CardOfHomeComponent;
  let fixture: ComponentFixture<CardOfHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfHomeComponent]
    });
    fixture = TestBed.createComponent(CardOfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
