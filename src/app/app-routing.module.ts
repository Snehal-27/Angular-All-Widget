import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule, Routes} from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)

  },
  // {
  //   path:'graph',
  //   loadChildren: 'app/products/products.module#ProductsModule'
  // },
  // {
  //   path:'grid',
  //   loadChildren: 'app/products/products.module#ProductsModule'
  // },
  // {
  //   path:'map',
  //   loadChildren: 'app/products/products.module#ProductsModule'
  // },
  // {
  //   path:'pivot',
  //   loadChildren: 'app/products/products.module#ProductsModule'
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: AppComponent
  } 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
