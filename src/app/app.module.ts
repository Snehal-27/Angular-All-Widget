import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MapModule } from './map/map.module';
import { ChartsModule } from './charts/charts.module';
import { GridModule } from './grid/grid.module';
import { PivotModule } from './pivot/pivot.module';
import { GraphModule } from './graph/graph.module';


@NgModule({
  declarations: [AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    ChartsModule,
    GridModule,
    PivotModule,
    GraphModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
