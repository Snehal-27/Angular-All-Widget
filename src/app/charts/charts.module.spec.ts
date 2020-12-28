import { ChartModule } from './chart.module';

describe('ChartsModule', () => {
  let chartsModule: ChartModule;

  beforeEach(() => {
    chartsModule = new ChartModule();
  });

  it('should create an instance', () => {
    expect(chartsModule).toBeTruthy();
  });
});
