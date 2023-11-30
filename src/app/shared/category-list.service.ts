import { Injectable } from '@angular/core';
import { CardList } from '../interfaces/CardList';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  constructor() { }
  categoryList!: CardList;
  private categoryListDataSubject = new BehaviorSubject<CardList>(this.categoryList);
  public categoryListData$ = this.categoryListDataSubject.asObservable();

  setCategoryList(categoryListData: CardList) {
    this.categoryListDataSubject.next(categoryListData);
  }
}
