import { Component, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { SliderComponent,CardData } from './category-slider/slider/slider.component';

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
  @ViewChild('sliderComponent', { static: false }) sliderComponent!: SliderComponent;

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
    if (this.sliderComponent) {
      // Now you have access to the SliderComponent instance
      alert('SliderComponent instance: '+ this.sliderComponent);
    }
  }
}
