import { Component } from '@angular/core';
import { CardList } from '../interfaces/CardList';

import { ActivatedRoute } from '@angular/router';
import { CategoryDetailsService } from '../shared/category-details.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
   categoryDetails: CardList[] = []; 

  constructor(private dataSharingService: CategoryDetailsService) {}

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
