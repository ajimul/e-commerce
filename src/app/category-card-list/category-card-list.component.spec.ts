import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardListComponent } from './category-card-list.component';

describe('CategoryCardListComponent', () => {
  let component: CategoryCardListComponent;
  let fixture: ComponentFixture<CategoryCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCardListComponent]
    });
    fixture = TestBed.createComponent(CategoryCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
