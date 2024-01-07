import { TestBed } from '@angular/core/testing';

import { EditCatService } from './edit-cat.service';

describe('EditCatService', () => {
  let service: EditCatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
