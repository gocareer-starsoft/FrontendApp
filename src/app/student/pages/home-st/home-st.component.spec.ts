import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStComponent } from './home-st.component';

describe('HomeStComponent', () => {
  let component: HomeStComponent;
  let fixture: ComponentFixture<HomeStComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeStComponent]
    });
    fixture = TestBed.createComponent(HomeStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
