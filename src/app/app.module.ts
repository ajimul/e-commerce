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
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { NumberInputDirective } from './directives/number-input.directive';
import { CategoryDetailsViewService } from './shared/category-details-view.service';
import { CardCheckoutComponent } from './card-checkout/card-checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api-service/ApiService';
import { LoginComponent } from './login/login.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
      { path: 'card-checkout', component: CardCheckoutComponent },
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
    ProductListComponent,
    CategoryDetailsComponent,
    NumberInputDirective,
    CardCheckoutComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [  CategoryDetailsViewService,ApiService],
  bootstrap: [AppComponent]
  // bootstrap: [CardCheckoutComponent]
  // bootstrap: [PageContentComponent]
  // bootstrap: [CardCarouselComponent ]
  // bootstrap: [SitemapComponent ]
  // bootstrap: [CardItemsSliderComponent ]
  // bootstrap: [ImageSliderComponent ]
  // bootstrap: [CardComponent ] 
  // bootstrap: [CardSliderComponent ] 
  // bootstrap: [CategoryDetailsComponent ] 
})
export class AppModule { }
