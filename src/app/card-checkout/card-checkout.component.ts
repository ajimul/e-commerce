import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryDetailsViewService } from '../shared/category-details-view.service';
import { CategoryDetails } from '../interfaces/share-interface';
import { ApiService } from '../api-service/ApiService';
import { CardValueService } from '../shared/card-value.service';

@Component({
  selector: 'app-card-checkout',
  templateUrl: './card-checkout.component.html',
  styleUrls: ['./card-checkout.component.css']
})
export class CardCheckoutComponent {
  myCardList: CategoryDetails[] = [];
  basePath: string = "assets/Image/";
  constructor(private cd: ChangeDetectorRef,
    private categoryDetailsService: CategoryDetailsViewService,
    private route: Router,
    private cardValue: CardValueService,
    private apiService: ApiService
  ) { }

  buyNow(event: Event, cardData: CategoryDetails) {
    event.stopPropagation(); // to skip click effect parent child, only effect on child
  }

  checkOutMyCards(clientId:number) {
    this.apiService.checkOutMyCards(clientId).subscribe({
      next: (value) => {
        this.myCardList=[];
        this.myCardList = value
      },
      error: (e) => {

      },
      complete: () => {
      }
    })
  }
  ngOnInit() {
    this.checkOutMyCards(1);
  
  }
  
  getMyCardsByClientRefId(clientId: number) {
    this.apiService.getMyCardsByClientRefId(clientId).subscribe({
      next: (value) => {
        this.cardValue.setCardValue(value.length);
      },
      error: (e) => {

      }, complete: () => {

      }
    })
  }

  viewCard(event: MouseEvent, data: CategoryDetails) {
    this.route.navigate(['home/category-details'], { skipLocationChange: true });
    this.categoryDetailsService.setCategoryDetailsView(data);
  }
  cardDelete(event: MouseEvent, categoryDetails: CategoryDetails) {

    if (categoryDetails) {
     
      this.apiService.deleteMyCard(categoryDetails.cDetailsId!,1).subscribe({
        next: (value) => {
          this.checkOutMyCards(1);
          this.getMyCardsByClientRefId(1);

        },
        error: (e) => {

        },
        complete: () => {
        }
      })

    }

  }
}
