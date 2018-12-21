import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './deck-info.component.html',
  styleUrls: ['./deck-info.component.scss'],
  animations: [

    trigger('cardAdded', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),
          ]))]), { optional: true })

      ])
    ])
  ]
})

export class DeckInfoComponent implements OnInit {

  cardCount: number;
  cardName: string = '';
  cardQuantity: number = 1;
  cards = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.card.subscribe(res => this.cards = res)
    this.cardCount = this.cards.length;
    this._data.changeDeck(this.cards);
  }

  addCard() {
    if (this.cardName != '') {
      this.cards.push(this.cardName + ' x' + this.cardQuantity);
      this.cardName = '';
      this.cardQuantity = 1;
      this.cardCount = this.cards.length;
    }
  }

  removeCard(i) {
    this.cards.splice(i, 1);
    this._data.changeDeck(this.cards);
  }
}
