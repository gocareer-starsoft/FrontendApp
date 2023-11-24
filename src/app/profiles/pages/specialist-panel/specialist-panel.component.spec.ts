import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistPanelComponent } from './specialist-panel.component';

describe('HomeSpComponent', () => {
  let component: SpecialistPanelComponent;
  let fixture: ComponentFixture<SpecialistPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialistPanelComponent]
    });
    fixture = TestBed.createComponent(SpecialistPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
