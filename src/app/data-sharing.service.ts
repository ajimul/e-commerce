// data-sharing.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardList } from './shared-interface/shared-interface.module';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  categoryList!: CardList;
  private categoryListDataSubject = new BehaviorSubject<CardList>(this.categoryList);
  public categoryListData$ = this.categoryListDataSubject.asObservable();

  setCategoryList(categoryListData: CardList) {
    this.categoryListDataSubject.next(categoryListData);
  }

  // category details data sharing 
  categoryDetails!: CardList;
  private categoryDetailsDataSubject = new BehaviorSubject<CardList>(this.categoryDetails);
  public categoryDetailsData$ = this.categoryDetailsDataSubject.asObservable();

  setCategoryDetails(categoryDetailsData: CardList) {
    this.categoryDetailsDataSubject.next(categoryDetailsData);
  }

  myCardDetails!: CardList[];
  private myCardDetailsDataSubject = new BehaviorSubject<CardList[]>(this.myCardDetails);
  public myCardDetailsData$ = this.myCardDetailsDataSubject.asObservable();
  
  setMyCardDetails(myCardDetailsData: CardList[]) {
    const currentArray = this.myCardDetailsDataSubject.getValue() || []; // Initialize as an empty array if undefined
    const updatedArray = [...currentArray, ...myCardDetailsData];
    this.myCardDetailsDataSubject.next(updatedArray);
  
  }

}
