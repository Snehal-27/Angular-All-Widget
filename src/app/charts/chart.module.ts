import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartGenerateComponent } from './chart-generate/chart-generate.component';

@NgModule({
  imports: [
    CommonModule,ChartsRoutingModule
  ],
  declarations: [ChartGenerateComponent]
})
export class ChartModule { }
