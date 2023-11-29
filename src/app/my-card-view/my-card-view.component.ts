import { Component } from '@angular/core';
import { CardList } from '../shared-interface/shared-interface.module';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-my-card-view',
  templateUrl: './my-card-view.component.html',
  styleUrls: ['./my-card-view.component.css']
})
export class MyCardViewComponent {
  myCardDetails: CardList[] = [];
  constructor(private dataSharingService: DataSharingService) { }

  buyNow(event: Event, cardData: CardList) {
    event.stopPropagation(); // to skip click effect parent child, only effect on child
  }
  ngOnInit() {
    this.dataSharingService.myCardDetailsData$.subscribe(data => {
     
      if (data) {
        this.myCardDetails = data;
      }
    });
  }
}
