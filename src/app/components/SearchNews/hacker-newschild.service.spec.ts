import { TestBed } from '@angular/core/testing';

import { HackerNewschildService } from './hacker-newschild.service';

describe('HackerNewschildService', () => {
  let service: HackerNewschildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerNewschildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
