import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import Swiper from 'swiper';
export interface CardData {
  id?: number;
  imageSrc: string;
  title: string;
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
  onCardClicked(cardData: CardData) {
  }
  ngOnInit() {
  }

}
