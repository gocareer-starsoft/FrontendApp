import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsSpComponent } from './tests-sp.component';

describe('TestsSpComponent', () => {
  let component: TestsSpComponent;
  let fixture: ComponentFixture<TestsSpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsSpComponent]
    });
    fixture = TestBed.createComponent(TestsSpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
