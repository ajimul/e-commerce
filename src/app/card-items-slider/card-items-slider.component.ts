import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
export interface CardData {
  id?: number;
  imageSrc: string;
  title: string;
  price: string;
  stars: number;
  location: string;
}
export interface CardList {
  imageSrc: string;
}
@Component({
  selector: 'app-card-items-slider',
  templateUrl: './card-items-slider.component.html',
  styleUrls: ['./card-items-slider.component.css']
})
export class CardItemsSliderComponent implements OnInit {


  // @ViewChildren('.button-area button') preview: QueryList<ElementRef> | undefined;

  @Output() cardClicked: EventEmitter<CardData> = new EventEmitter<CardData>();
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
      imageSrc: 'assets/Image/Darjeeling-tea (5).jpg',
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


  ngOnInit(): void {

  }
  @ViewChild('cardsContainer') cardsContainer: ElementRef | undefined;

  constructor(private el: ElementRef) { }
  
  nextSlide() {
    const eml = this.cardsContainer?.nativeElement;
    const cards = eml?.getElementsByClassName("card");
    eml?.append(cards?.[0]);
  }
  
  prevSlide() {
    const eml = this.cardsContainer?.nativeElement;
    const cards = eml?.getElementsByClassName("card");
    eml?.prepend(cards?.[cards.length - 1]);
  }


  onCardClick(event: MouseEvent, cardData: CardData, index: number) {
    this.cardClicked.emit(cardData);
  }
}