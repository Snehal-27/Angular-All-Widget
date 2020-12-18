import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';


const graphRoutes: Routes = [
  {
    path: '', 
    component: GraphComponent,
    children: [
      { path: 'graph', component: GraphComponent },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(graphRoutes)
  ],
  declarations: [GraphComponent ]
})
export class GraphRoutingModule { }
