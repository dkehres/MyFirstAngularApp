import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckInfoComponent } from './deck-info/deck-info.component';
import { TourneyInfoComponent } from './tourney-info/tourney-info.component';

const routes: Routes = [

  {
    path: '',
    component: DeckInfoComponent
  },
  
  
  {
    path: 'tourney',
    component: TourneyInfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
