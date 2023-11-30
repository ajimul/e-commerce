import { Injectable } from '@angular/core';
import { CardList } from '../interfaces/CardList';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailsService {

  constructor() { }
  categoryDetails!: CardList;
  private categoryDetailsDataSubject = new BehaviorSubject<CardList>(this.categoryDetails);
  public categoryDetailsData$ = this.categoryDetailsDataSubject.asObservable();

  setCategoryDetails(categoryDetailsData: CardList) {
    this.categoryDetailsDataSubject.next(categoryDetailsData);
  }
}
