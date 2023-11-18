import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
export interface CardData {
  id?: number;
  imageSrc: string;
  title: string;
  weight: string;
  stars: number;
  location: string;
}
@Component({
  selector: 'app-card-items-slider',
  templateUrl: './card-items-slider.component.html',
  styleUrls: ['./card-items-slider.component.css']
})
export class CardItemsSliderComponent implements OnInit {
  @Output() cardClicked: EventEmitter<CardData> = new EventEmitter<CardData>();
  @ViewChild('cardSlider') cardSlider!: ElementRef<HTMLDivElement>;
  @ViewChild('card') cardWidth!: ElementRef<HTMLDivElement>;

  currentIndex = 0;
  totalCards: number = 0;
  cardDataArray = [
    { imageSrc: 'assets/Image/Green-tea (1).jpg' },
    { imageSrc: 'assets/Image/Green-tea (2).jpg' },
    { imageSrc: 'assets/Image/Green-tea (3).jpg' },
    { imageSrc: 'assets/Image/Green-tea (4).jpg' },
    { imageSrc: 'assets/Image/Green-tea (5).jpg' },
    { imageSrc: 'assets/Image/Green-tea (6).jpg' },
    { imageSrc: 'assets/Image/Green-tea (7).jpg' },
    { imageSrc: 'assets/Image/Green-tea (8).jpg' },
    { imageSrc: 'assets/Image/Green-tea (9).jpg' },
    { imageSrc: 'assets/Image/Green-tea (10).jpg' },
  ];
  ngOnInit() {
    this.totalCards = this.cardDataArray.length;
  }
  nextCard() {
    this.currentIndex = (this.currentIndex + 4) % this.totalCards;
    this.updateSlider();
  }
  prevCard() {
    this.currentIndex = (this.currentIndex - 4 + this.totalCards) % this.totalCards;
    this.updateSlider();
  }
  updateSlider() {
    if (this.cardSlider.nativeElement) {
      const cardWidth = this.cardWidth.nativeElement.offsetWidth;
      const translateXValue = -this.currentIndex * cardWidth;
      this.cardSlider.nativeElement.style.transition = 'transform 0.5s ease-in-out';
      this.cardSlider.nativeElement.style.transform = `translateX(${translateXValue}px)`;
    }
  }
  // @HostListener('wheel', ['$event'])
  // handleWheel(event: WheelEvent) {
  //   if (event.deltaY > 0) {
  //     this.nextCard();
  //   } else if (event.deltaY < 0) {
  //     this.prevCard();
  //   }
  // }
}
