import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfInfoComponent } from './card-of-info.component';

describe('CardOfInfoComponent', () => {
  let component: CardOfInfoComponent;
  let fixture: ComponentFixture<CardOfInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfInfoComponent]
    });
    fixture = TestBed.createComponent(CardOfInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
