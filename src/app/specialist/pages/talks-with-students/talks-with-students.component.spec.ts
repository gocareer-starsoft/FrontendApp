import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksWithStudentsComponent } from './talks-with-students.component';

describe('TalksSpComponent', () => {
  let component: TalksWithStudentsComponent;
  let fixture: ComponentFixture<TalksWithStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalksWithStudentsComponent]
    });
    fixture = TestBed.createComponent(TalksWithStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
