import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksSpComponent } from './talks-sp.component';

describe('TalksSpComponent', () => {
  let component: TalksSpComponent;
  let fixture: ComponentFixture<TalksSpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalksSpComponent]
    });
    fixture = TestBed.createComponent(TalksSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
