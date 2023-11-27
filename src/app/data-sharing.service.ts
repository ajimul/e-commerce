// data-sharing.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardList } from './shared-interface/shared-interface.module';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  cardList!: CardList;
  private dataSubject = new BehaviorSubject<CardList>(this.cardList);
  public data$ = this.dataSubject.asObservable();

  setData(data: CardList) {
    this.dataSubject.next(data);
  }
}
