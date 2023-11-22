import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { CardData } from './card-slider/card-slider.component';

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
