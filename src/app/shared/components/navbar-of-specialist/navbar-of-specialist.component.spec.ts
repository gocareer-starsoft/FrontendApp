import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOfSpecialistComponent } from './navbar-of-specialist.component';

describe('NavMenuComponent', () => {
  let component: NavbarOfSpecialistComponent;
  let fixture: ComponentFixture<NavbarOfSpecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarOfSpecialistComponent]
    });
    fixture = TestBed.createComponent(NavbarOfSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
