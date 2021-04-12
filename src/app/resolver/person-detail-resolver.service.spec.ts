import { TestBed } from '@angular/core/testing';

import { PersonDetailResolverService } from './person-detail-resolver.service';

describe('PersonDetailResolverService', () => {
  let service: PersonDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
