import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpecialistComponent } from './home-specialist.component';

describe('HomeSpComponent', () => {
  let component: HomeSpecialistComponent;
  let fixture: ComponentFixture<HomeSpecialistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSpecialistComponent]
    });
    fixture = TestBed.createComponent(HomeSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
