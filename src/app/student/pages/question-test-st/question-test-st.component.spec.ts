import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTestStComponent } from './question-test-st.component';

describe('QuestionTestStComponent', () => {
  let component: QuestionTestStComponent;
  let fixture: ComponentFixture<QuestionTestStComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionTestStComponent]
    });
    fixture = TestBed.createComponent(QuestionTestStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
