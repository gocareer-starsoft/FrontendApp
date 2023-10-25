import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOfUserComponent } from './profile-of-user.component';

describe('ProfileComponent', () => {
  let component: ProfileOfUserComponent;
  let fixture: ComponentFixture<ProfileOfUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileOfUserComponent]
    });
    fixture = TestBed.createComponent(ProfileOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
