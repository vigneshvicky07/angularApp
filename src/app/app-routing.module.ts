import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TopnavComponent} from './topnav/topnav.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path : 'topnav', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent = [WeatherComponent];
