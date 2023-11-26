import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NavebarComponent } from './navebar/navebar.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { CategoryCardListComponent } from './category-card-list/category-card-list.component';
import { Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';

const appRouts: Routes = [
  { path: '', component: AppComponent },
  { path: 'category', component: CategoryCardListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SitemapComponent,
    NavebarComponent,
    HeroCarouselComponent,
    CardCarouselComponent,
    CategoryCardListComponent,
    PageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [PageContentComponent]
  // bootstrap: [CardCarouselComponent ]
  // bootstrap: [SitemapComponent ]
  // bootstrap: [CardItemsSliderComponent ]
  // bootstrap: [ImageSliderComponent ]
  // bootstrap: [CardComponent ] 
  // bootstrap: [CardSliderComponent ] 
})
export class AppModule { }
