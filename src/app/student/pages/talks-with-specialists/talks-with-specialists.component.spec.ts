import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksWithSpecialistsComponent } from './talks-with-specialists.component';

describe('TalksStComponent', () => {
  let component: TalksWithSpecialistsComponent;
  let fixture: ComponentFixture<TalksWithSpecialistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalksWithSpecialistsComponent]
    });
    fixture = TestBed.createComponent(TalksWithSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
