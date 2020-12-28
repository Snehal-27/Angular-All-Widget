import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapModule } from './map/map.module';
import { ChartModule } from './charts/chart.module';
import { GridModule } from './grid/grid.module';
import { PivotModule } from './pivot/pivot.module';
import { GraphModule } from './graph/graph.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    ChartModule,
    GridModule,
    PivotModule,
    GraphModule,
    GoogleMapsModule,
    ChartsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
