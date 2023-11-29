import { ChangeDetectionStrategy } from '@angular/compiler';
import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';
import { CardList } from '../shared-interface/shared-interface.module';
import { JsonPipe } from '@angular/common';
import { first } from 'rxjs/operators';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryCardListComponent  {
  @Output() cardClicked: EventEmitter<CardList> = new EventEmitter<CardList>();
  @Output() addCardClicked: EventEmitter<CardList> = new EventEmitter<CardList>();
  @Input() requestCard?: CardList[];
  cardListTitle: string = 'All Category';
  categoryDetails: number = 10;
  cardList?: CardList[] = [
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Darjeeling-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Darjeeling-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Darjeeling-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Darjeeling-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (4).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (2).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (3).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 6,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 2,
      location: 'India, Westbengal,Siliguri,734011'
    },
  ];
  constructor(
    private cd: ChangeDetectorRef,
    private dataSharingService: DataSharingService,
    private route: Router) {
  }
  cardReset() {
    if (this.requestCard === undefined || this.requestCard.length === 0) {
    }
    else {
      this.cardList = [];
      this.cardListTitle = this.requestCard[0].title;
      this.cardList = this.requestCard;
    }
  }
  ngOnChanges() {
    this.cardReset();
  }
  viewCard(event: MouseEvent, CardList: CardList, index: number) {
    this.route.navigate(['home/category-details'], { skipLocationChange: true });

    this.dataSharingService.setCategoryDetails(CardList);
  }



  addCard(event: Event, cardList: CardList) {
    event.stopPropagation();//to skip click effect parent child, only effect on child  
    this.dataSharingService.setMyCardDetails([cardList]);

  }

}

