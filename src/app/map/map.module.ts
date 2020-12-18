import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapRoutingModule } from './map-routing.module';


@NgModule({
  imports: [
    CommonModule,MapRoutingModule
  ],
  declarations: []
})
export class MapModule { }
