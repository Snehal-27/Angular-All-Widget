import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';


const gridRoutes: Routes = [
  {
    path: '', 
    component: GridComponent,
    children: [
      { path: 'grid', component: GridComponent },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gridRoutes)
  ],
  declarations: [GridComponent ]
})
export class GraphRoutingModule { }
