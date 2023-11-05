import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalTestsComponent } from './vocational-tests.component';

describe('TestsStComponent', () => {
  let component: VocationalTestsComponent;
  let fixture: ComponentFixture<VocationalTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VocationalTestsComponent]
    });
    fixture = TestBed.createComponent(VocationalTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
