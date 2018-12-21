import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {DataService} from '../data.service';

@Component({
  selector: 'app-tourney-info',
  templateUrl: './tourney-info.component.html',
  styleUrls: ['./tourney-info.component.scss']
})
export class TourneyInfoComponent implements OnInit {

cards: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
   }

  ngOnInit() {
    this._data.card.subscribe(res => this.cards = res);
  }

  goToDeckInfo() {
    this.router.navigate([''])
  }

}
