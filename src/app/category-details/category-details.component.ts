import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CategoryDetailsService } from '../shared/category-details.service';
import { MyCardListService } from '../shared/my-card-list.service';
import { CategoryDetails, CategoryDetailsImgSrc } from '../interfaces/share-interface';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  categoryDetails: CategoryDetails[] = [];
  basePath: string = "assets/Image/";
  @ViewChild('slider') sliderx: ElementRef | undefined;
  @ViewChildren('.indicators div') indicators: QueryList<ElementRef> | undefined;

  categoryDetailsImgSrc: CategoryDetailsImgSrc[] = [];
  constructor(private dataSharingService: CategoryDetailsService,
    private myCardListService: MyCardListService) { }
  addCard(event: Event) {
    event.stopPropagation();//to skip click effect parent child, only effect on child  
    this.myCardListService.setMyCardList(this.categoryDetails);

  }
  ngOnInit() {
    this.dataSharingService.categoryDetailsData$.subscribe((data: CategoryDetails) => {
      if (data) {
        this.categoryDetails = [data];
      }
    });
    this.startSlider();
    this.categoryDetailsImgSrc = [];
    this.categoryDetails.forEach(element => {
      element.categoryDetailsImgSrc?.forEach(e2 => {
        this.categoryDetailsImgSrc.push({
          cDetailsImgSrcId: e2.cDetailsImgSrcId,
          cDetailsImgSrc: e2.cDetailsImgSrc,
          cDetailsRef: e2.cDetailsRef
        }
        );
      });
    });
  }
  counter = 0;
  isDragging = false;
  dragStartX: number = 0;
  dragEndX: number = 0;
  startSlider() {
    // setInterval(() => { this.nextSlide(); }); // Change slide every 3 seconds, adjust as needed
  }

  nextSlide() {
    this.counter++;
    if (this.counter === this.categoryDetailsImgSrc.length) {
      this.counter = 0;
    }
  }

  prevSlide() {
    this.counter--;
    if (this.counter < 0) {
      this.counter = this.categoryDetailsImgSrc.length - 1;
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
    const slideWidth = 100 / this.categoryDetailsImgSrc.length;
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
