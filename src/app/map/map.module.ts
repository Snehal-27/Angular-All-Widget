import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapRoutingModule } from './map-routing.module';
import { MapDetailsComponent } from './map-details/map-details.component';


@NgModule({
  imports: [
    CommonModule,MapRoutingModule
  ],
  declarations: [MapDetailsComponent]
})
export class MapModule { }
