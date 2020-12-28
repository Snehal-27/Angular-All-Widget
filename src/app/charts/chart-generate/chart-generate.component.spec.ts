import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGenerateComponent } from './chart-generate.component';

describe('ChartGenerateComponent', () => {
  let component: ChartGenerateComponent;
  let fixture: ComponentFixture<ChartGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
