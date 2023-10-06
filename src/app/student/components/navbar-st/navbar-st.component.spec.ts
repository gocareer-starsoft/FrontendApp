import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarStComponent } from './navbar-st.component';

describe('NavbarStComponent', () => {
  let component: NavbarStComponent;
  let fixture: ComponentFixture<NavbarStComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarStComponent]
    });
    fixture = TestBed.createComponent(NavbarStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
