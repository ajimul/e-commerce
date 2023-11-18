import { Component, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { CardItemsSliderComponent,CardData } from './card-items-slider/card-items-slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  @ViewChild('cardItemsSliderComponent', { static: false }) cardItemsSliderComponent!: CardItemsSliderComponent;

  // other code...

  onCardClicked(cardData: CardData) {
    // Handle the emitted event here
    alert('Card clicked in parent component: ' + cardData.title);
    alert('Card clicked in parent component: ' + cardData.imageSrc);
    alert('Card clicked in parent component: ' + cardData.weight);
    alert('Card clicked in parent component: ' + cardData.stars);
  }
  
  getSliderComponentInstance() {
    // Access the SliderComponent instance and do something with it
    if (this.cardItemsSliderComponent) {
      // Now you have access to the SliderComponent instance
      alert('SliderComponent instance: '+ this.cardItemsSliderComponent);
    }
  }
}
