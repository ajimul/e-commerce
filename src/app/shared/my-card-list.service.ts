import { Injectable } from '@angular/core';
import { CardList } from '../interfaces/CardList';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MyCardListService {

  constructor() { }
  myCardList!: CardList[];
  private myCardListDataSubject = new BehaviorSubject<CardList[]>(this.myCardList);
  public myCardListData$ = this.myCardListDataSubject.asObservable();
  

  setMyCardList(myCardListData: CardList[]) {
    const currentArray = this.myCardListDataSubject.getValue() || []; // Initialize as an empty array if undefined
    const updatedArray = [...currentArray, ...myCardListData];
    this.myCardListDataSubject.next(updatedArray);
  
  }
}
