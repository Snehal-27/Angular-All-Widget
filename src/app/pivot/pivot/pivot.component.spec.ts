import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PivotComponent } from './pivot.component';

describe('PivotComponent', () => {
  let component: PivotComponent;
  let fixture: ComponentFixture<PivotComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PivotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
