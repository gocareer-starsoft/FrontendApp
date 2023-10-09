import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksCardComponent } from './talks-card.component';

describe('TalksCardComponent', () => {
  let component: TalksCardComponent;
  let fixture: ComponentFixture<TalksCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalksCardComponent]
    });
    fixture = TestBed.createComponent(TalksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
