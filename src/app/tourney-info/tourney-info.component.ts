import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './tourney-info.component.html',
  styleUrls: ['./tourney-info.component.scss']
})
export class TourneyInfoComponent implements OnInit {

cards: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
   }

  ngOnInit() {
    this._data.card.subscribe(res => this.cards = res);

    // $(document).ready(function () {
    //   $("PreviousElementName").removeClass("active");//removes last manu item class
    //   $('CurrentElement').addClass('active'); // adds new menu item class
    // });
  }

  goToDeckInfo() {
    this.router.navigate(['deck'])
  }

  goToJoinTourney() {
    this.router.navigate(['join'])
  }

  goToHostTourney() {
    this.router.navigate(['host'])
  }


}
