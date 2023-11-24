import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import Swiper from 'swiper';
export interface CardData {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  stars: number;
  location: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  newCardList?: CardData[];
  cardDataArray:CardData[] = [
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
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
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
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
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
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
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
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
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
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
  
  onCardClicked(cardData: CardData) {
    console.log("Second response From Parent" + cardData.price);
  }
  cardSendToChild() {

   this.newCardList=this.cardDataArray;
  }
  cardSendToChildReset() {
   this.newCardList=[];
  }
  ngOnInit() {
  }

}
