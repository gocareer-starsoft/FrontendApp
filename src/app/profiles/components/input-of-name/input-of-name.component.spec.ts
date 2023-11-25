import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOfNameComponent } from './input-of-name.component';

describe('NameInputComponent', () => {
  let component: InputOfNameComponent;
  let fixture: ComponentFixture<InputOfNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputOfNameComponent]
    });
    fixture = TestBed.createComponent(InputOfNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
