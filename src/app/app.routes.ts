import { Routes } from '@angular/router';
import { Map } from './map/map';

//Routing with a redirect to map
export const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'map', component: Map },
];
