import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private cards = new BehaviorSubject<any>(['Viscera Seer x1','Kitchen Finks x2']);
card = this.cards.asObservable();

  constructor() { }

  changeDeck(card) {
    this.cards.next(card);
  }
}
