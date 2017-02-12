import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true,
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
