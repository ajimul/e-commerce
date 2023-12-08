import { ChangeDetectionStrategy } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDetailsService } from '../shared/category-details.service';
import { MyCardListService } from '../shared/my-card-list.service';
import { CategoryDetails, ProductDTO } from '../interfaces/share-interface';
import { ApiService } from '../api-service/ApiService';



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
    private categoryDetailsService: CategoryDetailsService,
    private myCardListService: MyCardListService,
    private route: Router,
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
  ngOnInit(){
    this.getAllCategoryDetails();
  }
  ngOnChanges() {
    if (this.requestCard !== undefined && this.requestCard !== null) {
      this.getCategoryDetails(this.requestCard.productId);
    }
  }

  viewCard(event: MouseEvent, categoryDetails: CategoryDetails, index: number) {
    this.route.navigate(['home/category-details'], { skipLocationChange: true });
    this.categoryDetailsService.setCategoryDetails(categoryDetails);
  }
  addCard(event: Event, cardList: CategoryDetails) {
    event.stopPropagation();//to skip click effect parent child, only effect on child  
    this.myCardListService.setMyCardList([cardList]);

  }

}

