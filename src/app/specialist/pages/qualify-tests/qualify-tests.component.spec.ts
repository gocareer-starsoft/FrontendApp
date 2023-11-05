import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyTestsComponent } from './qualify-tests.component';

describe('TestsSpComponent', () => {
  let component: QualifyTestsComponent;
  let fixture: ComponentFixture<QualifyTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualifyTestsComponent]
    });
    fixture = TestBed.createComponent(QualifyTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
