import { ChangeDetectionStrategy } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Optional, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDetailsViewService } from '../shared/category-details-view.service';
import { CategoryDetails, MyCard, MyCardDTO, ProductDTO } from '../interfaces/share-interface';
import { ApiService } from '../api-service/ApiService';
import { CardValueService } from '../shared/card-value.service';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryCardListComponent {
  @Output() cardClicked: EventEmitter<CategoryDetails> = new EventEmitter<CategoryDetails>();
  @Output() addCardClicked: EventEmitter<CategoryDetails> = new EventEmitter<CategoryDetails>();
  @Input() requestCard?: ProductDTO;
  cardListTitle: string = 'All Category';
  // categoryDetails: number = 10;
  basePath: string = "assets/Image/";
  categoryDetails?: CategoryDetails[] = [

  ];
  constructor(
    private cd: ChangeDetectorRef,
    private categoryDetailsViewService: CategoryDetailsViewService,
    private route: Router,
    private cardValue: CardValueService,
    private apiService: ApiService) {
  }
  getCategoryDetails(productId: number) {
    this.apiService.getCategoryDetails(productId).subscribe({
      next: (value) => {
        this.categoryDetails = value;
      },
      error: (e) => {

      },
      complete: () => {
      }
    })
  }
  getAllCategoryDetails() {
    this.apiService.getAllCategoryDetails().subscribe({
      next: (value) => {
        this.categoryDetails = value;
      },
      error: (e) => {

      },
      complete: () => {
      }
    })
  }
  ngOnInit() {
    this.getAllCategoryDetails();
  }
  ngOnChanges() {
    if (this.requestCard !== undefined && this.requestCard !== null) {
      this.getCategoryDetails(this.requestCard.productId);
    }
  }


  viewCard(event: MouseEvent, data: CategoryDetails, index: number) {
    this.route.navigate(['home/category-details'], { skipLocationChange: true });
    this.categoryDetailsViewService.setCategoryDetailsView(data);
  }
  addCard(event: Event, cardList: CategoryDetails) {

    event.stopPropagation();//to skip click effect parent child, only effect on child  
    const mycard = {
      clientRefId: 1,
      categoryDetailsId: cardList.cDetailsId
    } as MyCard;

    this.apiService.setMyCards(mycard).subscribe({
      next: (value) => {
        alert('Card Added Success!');
        this.getMyCardsByClientRefId(mycard.clientRefId)
      },
      error: (e) => {
        alert('Card Already Exist!');
      }
    
    });


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

}

