import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOfEmailComponent } from './input-of-email.component';

describe('EmailInputComponent', () => {
  let component: InputOfEmailComponent;
  let fixture: ComponentFixture<InputOfEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputOfEmailComponent]
    });
    fixture = TestBed.createComponent(InputOfEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
