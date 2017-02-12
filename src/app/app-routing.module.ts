import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'cards',
    children: [
      {
        path: '',
        component: CardsComponent
      }, {
        path: ':type',
        component: CardsComponent
      }
    ]
  }, {
    path: 'charts/:username',
    children: [
      {
        path: '',
        redirectTo: 'flot',
        pathMatch: 'full'
      },
      {
        path: 'flot',
        component: FlotComponent
      }, {
        path: 'radial',
        component: RadialComponent
      }, {
        path: 'rickshaw',
        component: RickshawComponent
      }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: false,
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
