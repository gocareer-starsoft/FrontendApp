import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalEventsComponent } from './vocational-events.component';

describe('TalksStComponent', () => {
  let component: VocationalEventsComponent;
  let fixture: ComponentFixture<VocationalEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocationalEventsComponent]
    });
    fixture = TestBed.createComponent(VocationalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
