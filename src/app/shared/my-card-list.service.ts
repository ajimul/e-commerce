import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CategoryDetails } from '../interfaces/share-interface';

@Injectable({
  providedIn: 'root'
})
export class MyCardListService {

  constructor() { }
  myCardList!: CategoryDetails[];
  private myCardListDataSubject = new BehaviorSubject<CategoryDetails[]>(this.myCardList);
  public myCardListData$ = this.myCardListDataSubject.asObservable();
  

  setMyCardList(myCardListData: CategoryDetails[]) {
    const currentArray = this.myCardListDataSubject.getValue() || []; // Initialize as an empty array if undefined
    const updatedArray = [...currentArray, ...myCardListData];
    this.myCardListDataSubject.next(updatedArray);
  
  }
}
