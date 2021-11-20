import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTabsModule} from '@angular/material/tabs';
import { MercuryComponent } from './mercury/mercury.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { VenusComponent } from './venus/venus.component';
import { JupiterComponent } from './jupiter/jupiter.component';
import { UranusComponent } from './uranus/uranus.component';
import { SaturnComponent } from './saturn/saturn.component';
import { NeptuneComponent } from './neptune/neptune.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MercuryComponent,
    EarthComponent,
    MarsComponent,
    VenusComponent,
    JupiterComponent,
    UranusComponent,
    SaturnComponent,
    NeptuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
