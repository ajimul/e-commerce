import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { CardList } from '../interfaces/CardList';



@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent {
  @Output() addCardClicked: EventEmitter<CardList> = new EventEmitter<CardList>();
  requestCard?: CardList[];
  cardList: CardList[] = [
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '10/kg',
      stars: 4,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'A refreshing, antioxidant-rich beverage with a light, earthy flavor. Known for promoting wellness and boosting metabolism.',
      price: '15/kg',
      stars: 3,
      location: 'India, Westbengal,Siliguri,734011'
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
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
    }, {
      imageSrc: 'assets/Image/Green-tea (5).jpg',
      title: 'Darjeeling-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 4,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (12).jpg',
      title: 'Green-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 3,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (3).jpg',
      title: 'Darjeeling-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 6,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (4).jpg',
      title: 'Darjeeling-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (4).jpg',
      title: 'Darjeeling-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Green-tea (4).jpg',
      title: 'Darjeeling-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 2,
      location: ''
    },
    {
      imageSrc: 'assets/Image/Darjeeling-tea (1).jpg',
      title: 'Green-Tea',
      description: 'Shop now',
      price: '10/kg',
      stars: 2,
      location: ''
    },


  ];
  constructor(private cd: ChangeDetectorRef) {

  }


  onCardClicked(CardList: CardList) {
  }
  onCategoryClicked(getCard: CardList) {
    
    this.requestCard = [];
    this.cardList.forEach(e => {
      if (e.title === getCard.title) {
        this.requestCard?.push({
          imageSrc: e.imageSrc,
          title: e.title,
          description: e.description,
          price: e.price,
          stars: e.stars,
          location: e.location
        })
      }
    });
    this.requestCard.forEach(e => {
      console.log(e.title)
    });
   
  }
  addToMyCard(CardList: CardList) {
       this.addCardClicked.emit(CardList);
  }
  ngOnInit() {
  }
  
}
