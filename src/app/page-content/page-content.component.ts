import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { CategoryDetails, ProductDTO } from '../interfaces/share-interface';



@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent {
  @Output() addCardClicked: EventEmitter<CategoryDetails> = new EventEmitter<CategoryDetails>();
  requestCard?: ProductDTO;
  categoryDetails: CategoryDetails[] = [];
  constructor(private cd: ChangeDetectorRef) {

  }


  onCardClicked(CardList: CategoryDetails) {
  }
  onCategoryClicked(productDTO: ProductDTO) {
    
    this.requestCard = {
      productId: 0,
      productName: '',
      productDesc: '',
      productImgSrc: ''
    };
    this.requestCard =productDTO;
 
  }
  addToMyCard(CardList: CategoryDetails) {
       this.addCardClicked.emit(CardList);
  }
  ngOnInit() {
  }
  
}
