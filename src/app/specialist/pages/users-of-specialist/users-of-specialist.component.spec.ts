import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOfSpecialistComponent } from './users-of-specialist.component';

describe('UsersOfSpecialistComponent', () => {
  let component: UsersOfSpecialistComponent;
  let fixture: ComponentFixture<UsersOfSpecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersOfSpecialistComponent]
    });
    fixture = TestBed.createComponent(UsersOfSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
