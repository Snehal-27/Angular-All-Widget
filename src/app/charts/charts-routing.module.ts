import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartGenerateComponent } from './chart-generate/chart-generate.component';
import { ChartsComponent } from './charts/charts.component';

const chartsRoutes: Routes = [
  {
    path: '', 
    component: ChartsComponent,
    children: [
      { path:':id/detail', component: ChartsComponent },
      { path: '', component: ChartGenerateComponent }  
      ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(chartsRoutes)
  ],
  declarations: [ChartsComponent ]
})
export class ChartsRoutingModule { }
