import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardItemsSliderComponent } from './card-items-slider/card-items-slider.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CardComponent } from './card/card.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
@NgModule({
  declarations: [
    AppComponent,
    CardItemsSliderComponent,
    ImageSliderComponent,
    CardComponent,
    SitemapComponent,
    CardSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
    bootstrap: [AppComponent ]
    // bootstrap: [SitemapComponent ]
  // bootstrap: [CardItemsSliderComponent ]
  // bootstrap: [ImageSliderComponent ]
  // bootstrap: [CardComponent ] 
  // bootstrap: [CardSliderComponent ] 
})
export class AppModule { }
