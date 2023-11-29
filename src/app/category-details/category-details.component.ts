import { Component } from '@angular/core';
import { CardList } from '../shared-interface/shared-interface.module';
import { DataSharingService } from '../data-sharing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
   categoryDetails: CardList[] = []; 

  constructor(private dataSharingService: DataSharingService) {}

  addCard(event: Event, cardData: CardList) {
  }
  ngOnInit() {
      this.dataSharingService.categoryDetailsData$.subscribe((data: CardList) => {
      if (data) {
        this.categoryDetails = [data];
      }
    });
  }
}
