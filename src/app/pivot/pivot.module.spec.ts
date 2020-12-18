import { PivotModule } from './pivot.module';

describe('PivotModule', () => {
  let pivotModule: PivotModule;

  beforeEach(() => {
    pivotModule = new PivotModule();
  });

  it('should create an instance', () => {
    expect(pivotModule).toBeTruthy();
  });
});
