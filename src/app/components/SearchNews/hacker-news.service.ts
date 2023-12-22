import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from  '../../shared/global'

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  

  constructor(private http: HttpClient) {}

  getNewestStories(): Observable<any>
  {
    return this.http.get(Global.BASE_API_PATH +"Story/GetStories");
  }

  geNewsStoriesDetail(id: number): Observable<any>
  {
     let params = new HttpParams().set('id', id);
     return this.http.get(Global.BASE_API_PATH +"Story/GetStoryDetail", { params });
  }

}
