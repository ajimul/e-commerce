import { Component } from '@angular/core';
import { CardList } from '../shared-interface/shared-interface.module';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  title = 'e-commerce';
  ngOnInit() {
  }
}