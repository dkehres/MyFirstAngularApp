import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckInfoComponent } from './deck-info/deck-info.component';
import { TourneyInfoComponent } from './tourney-info/tourney-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckInfoComponent,
    TourneyInfoComponent
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
