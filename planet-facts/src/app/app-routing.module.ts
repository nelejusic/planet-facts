import { SaturnComponent } from './saturn/saturn.component';
import { UranusComponent } from './uranus/uranus.component';
import { NeptuneComponent } from './neptune/neptune.component';
import { JupiterComponent } from './jupiter/jupiter.component';
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
  { path: 'jupiter', component: JupiterComponent},
  { path: 'neptune', component: NeptuneComponent},
  { path: 'uranus', component: UranusComponent},
  { path: 'saturn', component: SaturnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
