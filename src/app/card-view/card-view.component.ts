import { Component } from '@angular/core';
export interface CardList {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  stars: number;
  location: string;
}
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  cardList?: CardList[] = [
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Darjeeling-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    }
  ];
  addCard(event: Event, CardList: CardList) {
    event.stopPropagation();//to skip click effect parent child, only effect on child  
 
}
}
