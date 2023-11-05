import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfTestComponent } from './card-of-test.component';

describe('TestsCardComponent', () => {
  let component: CardOfTestComponent;
  let fixture: ComponentFixture<CardOfTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfTestComponent]
    });
    fixture = TestBed.createComponent(CardOfTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
