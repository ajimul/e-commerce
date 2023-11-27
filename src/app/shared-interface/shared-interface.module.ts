import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardList {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  stars: number;
  location: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class SharedInterfaceModule { }
