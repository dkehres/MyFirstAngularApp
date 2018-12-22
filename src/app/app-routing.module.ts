import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckInfoComponent } from './deck-info/deck-info.component';
import { TourneyInfoComponent } from './tourney-info/tourney-info.component';
import { HostTourneyComponent } from './tourney-info/host-tourney/host-tourney.component';
import { JoinTourneyComponent } from './tourney-info/join-tourney/join-tourney.component';

const routes: Routes = [

  {
    path: 'tourney',
    component: TourneyInfoComponent
  },
  {
    path: 'deck',
    component: DeckInfoComponent
  },
  {
    path: 'host',
    component: HostTourneyComponent
  },
  {
    path: 'join',
    component: JoinTourneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
