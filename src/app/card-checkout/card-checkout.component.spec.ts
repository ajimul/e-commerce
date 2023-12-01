import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCheckoutComponent } from './card-checkout.component';

describe('CardCheckoutComponent', () => {
  let component: CardCheckoutComponent;
  let fixture: ComponentFixture<CardCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCheckoutComponent]
    });
    fixture = TestBed.createComponent(CardCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
