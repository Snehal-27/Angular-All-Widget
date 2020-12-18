import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PivotComponent } from './pivot/pivot.component';


const pivotRoutes: Routes = [
  {
    path: '', 
    component: PivotComponent,
    children: [
      { path: 'map', component: PivotComponent },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pivotRoutes)
  ],
  declarations: [PivotComponent ]
})
export class PivotRoutingModule { }
