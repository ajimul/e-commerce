import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemsSliderComponent } from './card-items-slider.component';

describe('CardItemsSliderComponent', () => {
  let component: CardItemsSliderComponent;
  let fixture: ComponentFixture<CardItemsSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardItemsSliderComponent]
    });
    fixture = TestBed.createComponent(CardItemsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
