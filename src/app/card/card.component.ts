import { AfterViewInit, Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { CardData } from '../card-items-slider/card-items-slider.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements AfterViewInit {
  [x: string]: any;
  @Output() cardClicked: EventEmitter<CardData> = new EventEmitter<CardData>();


  cardDataArray = [
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
  }
  onCardClick(event: MouseEvent, cardData: CardData, index: number) {
    
    this.cardClicked.emit(cardData);
    alert("Card");

  }
  AddCard(event: Event) {
    event.stopPropagation();
    alert("Add Card");
  }

}

