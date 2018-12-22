import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as $ from 'jquery';
import {DataService} from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckInfoComponent } from './deck-info/deck-info.component';
import { TourneyInfoComponent } from './tourney-info/tourney-info.component';
import { HostTourneyComponent } from './tourney-info/host-tourney/host-tourney.component';
import { JoinTourneyComponent } from './tourney-info/join-tourney/join-tourney.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckInfoComponent,
    TourneyInfoComponent,
    HostTourneyComponent,
    JoinTourneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
