import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfSpecialistComponent } from './card-of-specialist.component';

describe('CardSpecialistComponent', () => {
  let component: CardOfSpecialistComponent;
  let fixture: ComponentFixture<CardOfSpecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfSpecialistComponent]
    });
    fixture = TestBed.createComponent(CardOfSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
