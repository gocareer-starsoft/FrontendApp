import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksStComponent } from './talks-st.component';

describe('TalksStComponent', () => {
  let component: TalksStComponent;
  let fixture: ComponentFixture<TalksStComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalksStComponent]
    });
    fixture = TestBed.createComponent(TalksStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
