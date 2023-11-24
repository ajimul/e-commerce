import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
export interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  stars: number;
  location: string;
}

@Component({
  selector: 'app-category-card-list',
  templateUrl: './category-card-list.component.html',
  styleUrls: ['./category-card-list.component.css']
})
export class CategoryCardListComponent implements AfterViewInit {
  [x: string]: any;
  @Output() cardClicked: EventEmitter<CardData> = new EventEmitter<CardData>();
  @Input() newCardListFromParent?:CardData[];
  cardDataArray?:CardData[] = [
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
  ];
  ngAfterViewInit(): void {
    this.cardReset();
  }
  ngOnInit() {
  }
  onCardClick(event: MouseEvent, cardData: CardData, index: number) {
        this.cardClicked.emit(cardData);
  }
  cardReset(){
    if (this.newCardListFromParent === undefined || this.newCardListFromParent.length===0) {
    }
    else{
      this.cardDataArray = [];
      this.cardDataArray=this.newCardListFromParent;
    }
   
  }
  AddCard(event: Event) {
    event.stopPropagation();
     }

}

