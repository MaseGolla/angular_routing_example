import { TestBed } from '@angular/core/testing';

import { StarWarsDemoServiceService } from './star-wars-demo-service.service';

describe('StarWarsDemoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarWarsDemoServiceService = TestBed.get(StarWarsDemoServiceService);
    expect(service).toBeTruthy();
  });
});
