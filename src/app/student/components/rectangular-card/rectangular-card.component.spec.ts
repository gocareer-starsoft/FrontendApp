import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangularCardComponent } from './rectangular-card.component';

describe('RectangularCardComponent', () => {
  let component: RectangularCardComponent;
  let fixture: ComponentFixture<RectangularCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RectangularCardComponent]
    });
    fixture = TestBed.createComponent(RectangularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
