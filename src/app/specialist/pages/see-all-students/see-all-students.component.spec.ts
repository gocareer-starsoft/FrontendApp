import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllStudentsComponent } from './see-all-students.component';

describe('UsersOfSpecialistComponent', () => {
  let component: SeeAllStudentsComponent;
  let fixture: ComponentFixture<SeeAllStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeAllStudentsComponent]
    });
    fixture = TestBed.createComponent(SeeAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
