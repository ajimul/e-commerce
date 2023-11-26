import {  Component} from '@angular/core';
export interface CardList {
  imageSrc: string;
  title: string;
  description: string;
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
  myCard?: number = 0;
  addToMyCard(CardList: CardList) {
    this.myCard = CardList.stars;
  }
  ngOnInit() {
  }
}
