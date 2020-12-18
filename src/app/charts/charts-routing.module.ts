import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';


const chartsRoutes: Routes = [
  {
    path: '', 
    component: ChartsComponent,
    children: [
      { path: 'charts', component: ChartsComponent },
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
