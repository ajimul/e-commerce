import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardViewComponent } from './my-card-view.component';

describe('MyCardViewComponent', () => {
  let component: MyCardViewComponent;
  let fixture: ComponentFixture<MyCardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCardViewComponent]
    });
    fixture = TestBed.createComponent(MyCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
