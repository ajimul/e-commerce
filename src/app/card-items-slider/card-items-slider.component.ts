import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
export interface CardData {
  id?: number;
  imageSrc: string;
  title: string;
  weight: string;
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
  @Output() cardClicked: EventEmitter<CardData> = new EventEmitter<CardData>();
  // @ViewChild('cardSlider') cardSlider!: ElementRef<HTMLDivElement>;
  // @ViewChildren('card') cards!: QueryList<ElementRef<HTMLDivElement>>;


  ngOnInit(): void {

  }

  counter = 0;
  totalWidth = 0;
  displayCardNo: number = 4;

  cardDataList: CardList[] = [
  { imageSrc: 'assets/Image/Green-tea (1).jpg' },
  { imageSrc: 'assets/Image/Green-tea (2).jpg' },
  { imageSrc: 'assets/Image/Green-tea (3).jpg' },
  { imageSrc: 'assets/Image/Green-tea (4).jpg' },
  { imageSrc: 'assets/Image/Green-tea (5).jpg' },
  { imageSrc: 'assets/Image/Green-tea (6).jpg' },
  { imageSrc: 'assets/Image/Green-tea (7).jpg' },
  { imageSrc: 'assets/Image/Green-tea (8).jpg' },
  { imageSrc: 'assets/Image/Green-tea (9).jpg' },
  { imageSrc: 'assets/Image/Green-tea (10).jpg' }];
  cardDataArray: CardList[] = [];

  ngAfterViewInit() {
    for (let i = 0; i < this.displayCardNo; i++) {
      this.cardDataArray.push(this.cardDataList[i]);
      }
    }

  
  nextCard() {
    this.cardDataArray = [];
    this.cardDataArray.push(
      { imageSrc: 'assets/Image/Green-tea (6).jpg' },
      { imageSrc: 'assets/Image/Green-tea (7).jpg' },
      { imageSrc: 'assets/Image/Green-tea (8).jpg' },
      { imageSrc: 'assets/Image/Green-tea (9).jpg' });
  }

  prevCard() {
    

      this.cardDataArray = [
        { imageSrc: 'assets/Image/Green-tea (1).jpg' },
        { imageSrc: 'assets/Image/Green-tea (2).jpg' },
        { imageSrc: 'assets/Image/Green-tea (3).jpg' },
        { imageSrc: 'assets/Image/Green-tea (4).jpg' },
      ];
    
  }
}