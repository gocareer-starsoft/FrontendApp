import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfNavigationComponent } from './menu-of-navigation.component';

describe('NavMenuComponent', () => {
  let component: MenuOfNavigationComponent;
  let fixture: ComponentFixture<MenuOfNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOfNavigationComponent]
    });
    fixture = TestBed.createComponent(MenuOfNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
