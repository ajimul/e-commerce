import { Component } from '@angular/core';
import { CardList } from '../interfaces/CardList';
import { MyCardListService } from '../shared/my-card-list.service';


@Component({
  selector: 'app-my-card-view',
  templateUrl: './my-card-view.component.html',
  styleUrls: ['./my-card-view.component.css']
})
export class MyCardViewComponent {
  myCardList: CardList[] = [];
  constructor(private myCardListService: MyCardListService) { }

  buyNow(event: Event, cardData: CardList) {
    event.stopPropagation(); // to skip click effect parent child, only effect on child
  }
  ngOnInit() {
    this.myCardListService.myCardListData$.subscribe(data => {
     
      if (data) {
        this.myCardList = data;
      }
    });
  }
}
