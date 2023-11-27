import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NavebarComponent } from './navebar/navebar.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { CategoryCardListComponent } from './category-card-list/category-card-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { CardViewComponent } from './card-view/card-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedInterfaceModule } from './shared-interface/shared-interface.module';

const appRouts: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomePageComponent,
    children: [
      { path: '', component: PageContentComponent }, // empty path makes it the default with HomePageComponent
      { path: 'page-content', component: PageContentComponent }, //its optional because Page Content Component as default allowed with HomePageComponent may in future required
      { path: 'cardview', component: CardViewComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SitemapComponent,
    NavebarComponent,
    HeroCarouselComponent,
    CardCarouselComponent,
    CategoryCardListComponent,
    PageContentComponent,
    CardViewComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedInterfaceModule,
    RouterModule.forRoot(appRouts)
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
