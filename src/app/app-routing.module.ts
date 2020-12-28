import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule, Routes} from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts/charts.component';

const routes: Routes = [
  {
    path: 'charts',
    loadChildren: () => import('./charts/chart.module').then(m => m.ChartModule)

  },
  {
    path:'graph',
    loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)
  },
  {
    path:'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)
  },
  {
    path:'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path:'pivot',
    loadChildren: () => import('./pivot/pivot.module').then(m => m.PivotModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: ChartsComponent
  } 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
