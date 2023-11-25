import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOfStudentComponent } from './navbar-of-student.component';

describe('NavbarComponent', () => {
  let component: NavbarOfStudentComponent;
  let fixture: ComponentFixture<NavbarOfStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOfStudentComponent]
    });
    fixture = TestBed.createComponent(NavbarOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
