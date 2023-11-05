import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarOfNavigationComponent } from './bar-of-navigation.component';

describe('NavbarComponent', () => {
  let component: BarOfNavigationComponent;
  let fixture: ComponentFixture<BarOfNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarOfNavigationComponent]
    });
    fixture = TestBed.createComponent(BarOfNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
