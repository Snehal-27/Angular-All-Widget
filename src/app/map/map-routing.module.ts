import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';


const mapRoutes: Routes = [
  {
    path: '', 
    component: MapComponent,
    children: [
      { path: 'map', component: MapComponent },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mapRoutes)
  ],
  declarations: [MapComponent ]
})
export class MapRoutingModule { }
