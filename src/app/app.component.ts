import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  // @ViewChild('targetElement', { static: true }) targetElement!: ElementRef;
 
 
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
  ngOnInit() {
    // this.trackingElement(this.targetElement,"")
  }


  // @ViewChild('targetElement', { static: true }) targetElement!: ElementRef;

trackingElement(elementRef: ElementRef,relation:string){
  const nativeElement = elementRef.nativeElement;
  const styles = window.getComputedStyle(nativeElement);

  let propertics=relation+'\n'+'display:'+styles.getPropertyValue('display')+';\n'
  +'flex-direction:'+ styles.getPropertyValue('flex-direction')+';\n'
  +'flex-wrap:'+ styles.getPropertyValue('flex-wrap')+';\n'
  +'justify-content:'+ styles.getPropertyValue('justify-content')+';\n'
  +'align-items:'+ styles.getPropertyValue('align-items')+';\n'
  +'align-content:'+ styles.getPropertyValue('align-content')+';\n'
  +'position:'+ styles.getPropertyValue('position')+';\n'
  +'width:'+ styles.getPropertyValue('width')+';\n'
  +'height:'+ styles.getPropertyValue('height')+';\n'
  +'\n'
  +'overflow:'+ styles.getPropertyValue('overflow')+';\n'
  +'overflow-x:'+ styles.getPropertyValue('overflow-x')+';\n'
  +'overflow-y:'+ styles.getPropertyValue('overflow-y')+';\n'
  +'\n'
  +'padding-left:'+ styles.getPropertyValue('padding-left')+';\n'
  +'padding-top:'+ styles.getPropertyValue('padding-top')+';\n'
  +'padding-right:'+ styles.getPropertyValue('padding-right')+';\n'
  +'padding-bottom:'+ styles.getPropertyValue('padding-bottom')+';\n'
  +'\n'
  +'margin-left:'+ styles.getPropertyValue('margin-left')+';\n'
  +'margin-top:'+ styles.getPropertyValue('margin-top')+';\n'
  +'margin-right:'+ styles.getPropertyValue('margin-right')+';\n'
  +'margin-bottom:'+ styles.getPropertyValue('margin-bottom')+';\n'
  +'\n'
  +'border:'+ styles.getPropertyValue('border')+';\n'
  +'border-radius:'+ styles.getPropertyValue('border-radius')+';\n'
  +'box-sizing:'+ styles.getPropertyValue('box-sizing')+';\n'
  +'\n'
  +'font-size:'+ styles.getPropertyValue('font-size')+';\n'
  +'font-weight:'+ styles.getPropertyValue('font-weight')+';\n'
   console.log(propertics);
 }

}
