import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GraphRoutingModule } from './grid-routing.module';

@NgModule({
  imports: [
    CommonModule,GraphRoutingModule
  ],
  declarations: []
})
export class GridModule { }
