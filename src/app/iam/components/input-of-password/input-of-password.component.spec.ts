import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOfPasswordComponent } from './input-of-password.component';

describe('PasswordInputComponent', () => {
  let component: InputOfPasswordComponent;
  let fixture: ComponentFixture<InputOfPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputOfPasswordComponent]
    });
    fixture = TestBed.createComponent(InputOfPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
