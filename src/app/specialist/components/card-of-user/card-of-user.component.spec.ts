import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfUserComponent } from './card-of-user.component';

describe('CardUserComponent', () => {
  let component: CardOfUserComponent;
  let fixture: ComponentFixture<CardOfUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfUserComponent]
    });
    fixture = TestBed.createComponent(CardOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
