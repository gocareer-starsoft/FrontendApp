import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsStComponent } from './tests-st.component';

describe('TestsStComponent', () => {
  let component: TestsStComponent;
  let fixture: ComponentFixture<TestsStComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsStComponent]
    });
    fixture = TestBed.createComponent(TestsStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
