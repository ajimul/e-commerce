import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CategoryDetails } from '../interfaces/share-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryDetailsService {

  constructor() { }
  categoryDetails!: CategoryDetails;
  private categoryDetailsDataSubject = new BehaviorSubject<CategoryDetails>(this.categoryDetails);
  public categoryDetailsData$ = this.categoryDetailsDataSubject.asObservable();

  setCategoryDetails(categoryDetailsData: CategoryDetails) {
    this.categoryDetailsDataSubject.next(categoryDetailsData);
  }
}
