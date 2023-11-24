import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
export interface CardData {
  imageSrc: string;
  title: string;
  price: string;
  stars: number;
  location: string;
}
@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent{
  title = 'card-sliding';
  @ViewChild('shoppingContainer') shoppingContainer!: ElementRef;
  @Output() newItemEvent = new EventEmitter<CardData>();
  cardDataArray = [
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Green-Tea 1',
      description: 'Shop now',
      price: '10/kg',
      stars: 4,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea 2',
      description: 'Shop now',
      price: '',
      stars: 3,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (3).jpg',
      title: 'Green-Tea 3',
      description: 'Shop now',
      price: '',
      stars: 6,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea 4',
      description: 'Shop now',
      price: '',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (4).jpg',
      title: 'Green-Tea 5',
      description: 'Shop now',
      price: '',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea 6',
      description: 'Shop now',
      price: '',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (4).jpg',
      title: 'Green-Tea 7',
      description: 'Shop now',
      price: '',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea 8',
      description: 'Shop now',
      price: '',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (4).jpg',
      title: 'Green-Tea 9',
      description: 'Shop now',
      price: '',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea 10',
      description: 'Shop now',
      price: '',
      stars: 2,
      location: ''
    },


  ];

  ngOnInit() {}

  scrollAmount = 0;
  cardWidth = 0;
  cardMargin = 15; // Adjust margin as needed
  totalCards = this.cardDataArray.length; // Adjust based on the actual number of cards
  visibleCards = 4; // Adjust based on the number of cards you want to show
  @Output() cardClicked: EventEmitter<CardData> = new EventEmitter<CardData>();
 
  constructor(private cdr: ChangeDetectorRef) {}

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
      const cardElement=this.shoppingContainer.nativeElement.querySelector('.card');
      if(cardElement instanceof HTMLElement){
      this.cardWidth =cardElement.offsetWidth; // Adjust as needed
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
    } else if (this.shoppingContainer.nativeElement.offsetWidth >=361 && this.shoppingContainer.nativeElement.offsetWidth <= 544) {
      this.visibleCards = 1.5;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >=545 && this.shoppingContainer.nativeElement.offsetWidth <= 686) {
      this.visibleCards = 2;
    
    } else if (this.shoppingContainer.nativeElement.offsetWidth >=687 && this.shoppingContainer.nativeElement.offsetWidth <= 860) {
      this.visibleCards = 2.5;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >=861 && this.shoppingContainer.nativeElement.offsetWidth <= 1014) {
      this.visibleCards = 3;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >=1015 && this.shoppingContainer.nativeElement.offsetWidth <= 1180) {
      this.visibleCards = 3.5;
    } else if (this.shoppingContainer.nativeElement.offsetWidth >=1181) {
      this.visibleCards = 4;
    } 
  }

  nextScroll(): void {
    console.log("this.visibleCards"+this.visibleCards)
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
  onCardClick(event: MouseEvent, cardData: CardData, index: number) {
    
    this.cardClicked.emit(cardData);
    alert("Card");

  }
  rout(){

  }
  
}