import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsService', () => {
  let service: HackerNewsService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(HackerNewsService);
  // });
  

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [HackerNewsService]
  }));
  it('should be created', () => {
    const service: HackerNewsService = TestBed.get(HackerNewsService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: HackerNewsService= TestBed.get(HackerNewsService);
    expect(service.getNewestStories).toBeTruthy();
   });
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
