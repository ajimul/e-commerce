import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardItemsSliderComponent } from './card-items-slider/card-items-slider.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    CardItemsSliderComponent,
    ImageSliderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
    bootstrap: [AppComponent ]
  // bootstrap: [CardItemsSliderComponent ]
  // bootstrap: [ImageSliderComponent ]
  // bootstrap: [CardComponent ] 
})
export class AppModule { }
