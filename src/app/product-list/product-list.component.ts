import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { CategoryDetails, ProductDTO } from '../interfaces/share-interface';
import { ApiService } from '../api-service/ApiService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  basePath: string = "assets/Image/";
  title = 'card-sliding';
  @ViewChild('shoppingContainer') shoppingContainer!: ElementRef;

  @Output() categoryCardClicked: EventEmitter<ProductDTO> = new EventEmitter<ProductDTO>();
  productDTO: ProductDTO[] = [];
  scrollAmount = 0;
  cardWidth = 0;
  cardMargin = 15; // Adjust margin as needed
  totalCards = this.productDTO.length; // Adjust based on the actual number of cards
  visibleCards = 4; // Adjust based on the number of cards you want to show

  constructor(private cdr: ChangeDetectorRef,
    private apiService:ApiService) { }


  getProducts() {
    this.apiService.getProducts().subscribe({
      next: (value) => {
        this.productDTO = value;
      },
      error: (e) => {

      },
      complete: () => {
      }
    })

  }


  ngOnInit() {
    this.getProducts();
    this.totalCards = this.productDTO.length;
  }






  ngAfterViewInit(): void {
    this.setInitialVisibleCards();
    this.calculateCardWidth();
    this.scrollToCurrentPosition();
    this.cdr.detectChanges();


  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.calculateCardWidth();
    this.recalculateScrollPosition();
    this.setInitialVisibleCards();
  }

  calculateCardWidth(): void {
    if (this.shoppingContainer.nativeElement instanceof HTMLElement) {
      const cardElement = this.shoppingContainer.nativeElement.querySelector('.card');
      if (cardElement instanceof HTMLElement) {
        this.cardWidth = cardElement.offsetWidth; // Adjust as needed
      }
    }
  }

  recalculateScrollPosition(): void {
    if (this.shoppingContainer.nativeElement instanceof HTMLElement) {
      const maxScrollAmount = Math.max(0, this.totalCards - this.visibleCards);
      const newScrollAmount = Math.min(this.scrollAmount, maxScrollAmount);
      this.scrollAmount = newScrollAmount;
      this.scrollToCurrentPosition();
    }
  }

  scrollToCurrentPosition(): void {
    if (this.shoppingContainer.nativeElement instanceof HTMLElement) {
      const maxScrollAmount = Math.max(0, this.totalCards - this.visibleCards);
      this.scrollAmount = Math.min(this.scrollAmount, maxScrollAmount);
      const newPosition = this.scrollAmount * (this.cardWidth + this.cardMargin * 2);
      this.shoppingContainer.nativeElement.scrollLeft = newPosition;
    }
  }

  setInitialVisibleCards(): void {
    if (this.shoppingContainer.nativeElement.offsetWidth >= 300 && this.shoppingContainer.nativeElement.offsetWidth <= 360) {
      this.visibleCards = 1;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >= 361 && this.shoppingContainer.nativeElement.offsetWidth <= 544) {
      this.visibleCards = 1.5;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >= 545 && this.shoppingContainer.nativeElement.offsetWidth <= 686) {
      this.visibleCards = 2;

    } else if (this.shoppingContainer.nativeElement.offsetWidth >= 687 && this.shoppingContainer.nativeElement.offsetWidth <= 860) {
      this.visibleCards = 2.5;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >= 861 && this.shoppingContainer.nativeElement.offsetWidth <= 1014) {
      this.visibleCards = 3;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >= 1015 && this.shoppingContainer.nativeElement.offsetWidth <= 1180) {
      this.visibleCards = 3.5;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >= 1181) {
      this.visibleCards = 4;
    }
  }

  nextScroll(): void {
   alert(this.totalCards)
    if (this.shoppingContainer.nativeElement instanceof HTMLElement) {
      if (this.scrollAmount < this.totalCards - this.visibleCards) {
        this.scrollAmount++;
        this.scrollToCurrentPosition();
      }
    }
  }

  preScroll(): void {
    if (this.shoppingContainer.nativeElement instanceof HTMLElement) {
      if (this.scrollAmount > 0) {
        this.scrollAmount--;
        this.scrollToCurrentPosition();
      }
    }
  }

  isNextDisabled(): boolean {
    return this.scrollAmount >= Math.max(0, this.totalCards - this.visibleCards);
  }

  isPrevDisabled(): boolean {
    return this.scrollAmount <= 0;
  }
  onCardClick(event: MouseEvent, productDTO: ProductDTO, index: number) {

    this.categoryCardClicked.emit(productDTO);

  }


}