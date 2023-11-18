import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
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
      imageSrc: 'assets/Image/Green-tea (1).jpg',
      title: 'Card 1',
      weight: '10kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (2).jpg',
      title: 'Card 2',
      weight: '15kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (3).jpg',
      title: 'Card 2',
      weight: '15kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (4).jpg',
      title: 'Card 2',
      weight: '15kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
   

  ];
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  onCardClick(event: MouseEvent, cardData: CardData, index: number) {
    this.cardClicked.emit(cardData);
  }
  
 
}

