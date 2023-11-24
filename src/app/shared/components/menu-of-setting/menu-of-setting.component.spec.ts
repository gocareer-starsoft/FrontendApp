import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfSettingComponent } from './menu-of-setting.component';

describe('SettingsMenuComponent', () => {
  let component: MenuOfSettingComponent;
  let fixture: ComponentFixture<MenuOfSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOfSettingComponent]
    });
    fixture = TestBed.createComponent(MenuOfSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
