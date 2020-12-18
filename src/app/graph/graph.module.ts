import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph/graph.component';
import { GraphRoutingModule } from './graphs-routing.module';

@NgModule({
  imports: [
    CommonModule,GraphRoutingModule
  ],
  declarations: []
})
export class GraphModule { }
