import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.css']
})
export class HeroCarouselComponent implements OnInit {
  @ViewChild('slider') sliderx: ElementRef | undefined;
  @ViewChildren('.indicators div') indicators: QueryList<ElementRef> | undefined;
  images = [
    { src: 'assets/Image/Hero image (1).jpg', alt: 'Image 1' },
    { src: 'assets/Image/Hero image (2).jpg', alt: 'Image 2' },
    { src: 'assets/Image/Hero image (3).jpg', alt: 'Image 3' },
    { src: 'assets/Image/Hero image (4).jpg', alt: 'Image 4' },
    { src: 'assets/Image/Hero image (5).jpg', alt: 'Image 5' },
    { src: 'assets/Image/Hero image (6).jpg', alt: 'Image 6' },
  ];

  counter = 0;
  isDragging = false;
  dragStartX: number = 0;
  dragEndX: number = 0;

  ngOnInit() {
    this.startSlider();
  }

  startSlider() { 
    setInterval(() => { this.nextSlide(); }, 6000); // Change slide every 3 seconds, adjust as needed
  }

  nextSlide() {
    this.counter++;
    if (this.counter === this.images.length) {
      this.counter = 0;
     
    }
  }

  prevSlide() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.images.length - 1;
    }
  }

  goToSlide(index: number) {
    this.counter = index;
  
    if (this.indicators && this.indicators.length > index) {
      const indicatorElement = this.indicators.toArray()[index].nativeElement as HTMLElement;
      indicatorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
     if (this.isDragging) {
      this.dragEndX = event.clientX;
      this.handleDrag();
      this.isDragging = false;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
   
    if (this.isDragging) {
     this.dragEndX = event.clientX;
      this.handleDrag();
    }
  }

  private handleDrag() {
    const dragDistance = this.dragEndX - this.dragStartX;
    const slideWidth = 100 / this.images.length;
    const dragPercentage = (dragDistance / window.innerWidth) * 100;

    if (dragPercentage > 10) {
      this.prevSlide();
    } else if (dragPercentage < -10) {
      this.nextSlide();
    }
    // Reset drag start position
    this.dragStartX = this.dragEndX;
  }

}