import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificateTestSpComponent } from './calificate-test-sp.component';

describe('CalificateTestSpComponent', () => {
  let component: CalificateTestSpComponent;
  let fixture: ComponentFixture<CalificateTestSpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalificateTestSpComponent]
    });
    fixture = TestBed.createComponent(CalificateTestSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
