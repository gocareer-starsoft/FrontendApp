import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPageSpecialistComponent } from './principal-page-specialist.component';

describe('PrincipalPageSpecialistComponent', () => {
  let component: PrincipalPageSpecialistComponent;
  let fixture: ComponentFixture<PrincipalPageSpecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalPageSpecialistComponent]
    });
    fixture = TestBed.createComponent(PrincipalPageSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
