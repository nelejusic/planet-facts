import { MarsComponent } from './mars/mars.component';
import { EarthComponent } from './earth/earth.component';
import { MercuryComponent } from './mercury/mercury.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/mercury', pathMatch: 'full' },
  { path: 'mercury', component:  MercuryComponent},
  { path: 'earth', component:  EarthComponent},
  { path: 'mars', component: MarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
