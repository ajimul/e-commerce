import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Define the CardData interface
export interface CardData {
  id?: number;
  imageSrc: string;
  title: string;
  weight: string;
  stars: number;
  location: string;
}
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
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

