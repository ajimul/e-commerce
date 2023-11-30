import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NavebarComponent } from './navebar/navebar.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { CategoryCardListComponent } from './category-list/category-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from './page-content/page-content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyCardViewComponent } from './my-card-view/my-card-view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { NumberInputDirective } from './directives/number-input.directive';
import { MyCardListService } from './shared/my-card-list.service';
import { CategoryListService } from './shared/category-list.service';
import { CategoryDetailsService } from './shared/category-details.service';
import { ProductListService } from './shared/product-list.service';

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
      { path: 'category-details', component: CategoryDetailsComponent },
      { path: 'my-card-view', component: MyCardViewComponent },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SitemapComponent,
    NavebarComponent,
    HeroCarouselComponent,
    CategoryCardListComponent,
    PageContentComponent,
    HomePageComponent,
    MyCardViewComponent,
    ProductListComponent,
    CategoryDetailsComponent,
    NumberInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot(appRouts)
  ],
  providers: [MyCardListService, CategoryListService, CategoryDetailsService, ProductListService],
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
