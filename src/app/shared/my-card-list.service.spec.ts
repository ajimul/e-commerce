import { TestBed } from '@angular/core/testing';

import { MyCardListService } from './my-card-list.service';

describe('MyCardListService', () => {
  let service: MyCardListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
