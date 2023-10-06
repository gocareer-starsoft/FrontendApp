import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpComponent } from './home-sp.component';

describe('HomeSpComponent', () => {
  let component: HomeSpComponent;
  let fixture: ComponentFixture<HomeSpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSpComponent]
    });
    fixture = TestBed.createComponent(HomeSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
