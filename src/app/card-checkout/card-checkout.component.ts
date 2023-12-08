import { ChangeDetectorRef, Component } from '@angular/core';
import { MyCardListService } from '../shared/my-card-list.service';
import { Router } from '@angular/router';
import { CategoryDetailsService } from '../shared/category-details.service';
import { CategoryDetails } from '../interfaces/share-interface';

@Component({
  selector: 'app-card-checkout',
  templateUrl: './card-checkout.component.html',
  styleUrls: ['./card-checkout.component.css']
})
export class CardCheckoutComponent {
  myCardList: CategoryDetails[] = [];
  constructor(private cd: ChangeDetectorRef,
    private categoryDetailsService: CategoryDetailsService,
    private myCardListService: MyCardListService,
    private route: Router
    ) { }

  buyNow(event: Event, cardData: CategoryDetails) {
    event.stopPropagation(); // to skip click effect parent child, only effect on child
  }
  ngOnInit() {
    this.myCardListService.myCardListData$.subscribe(data => {
     
      if (data) {
        this.myCardList = data;
      }
    });
  }
  viewCard(event: MouseEvent, cardList: CategoryDetails) {
    this.route.navigate(['home/category-details'], { skipLocationChange: true });
    this.categoryDetailsService.setCategoryDetails(cardList);
  }
}
