import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfTalkComponent } from './card-of-talk.component';

describe('TalksCardComponent', () => {
  let component: CardOfTalkComponent;
  let fixture: ComponentFixture<CardOfTalkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfTalkComponent]
    });
    fixture = TestBed.createComponent(CardOfTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
