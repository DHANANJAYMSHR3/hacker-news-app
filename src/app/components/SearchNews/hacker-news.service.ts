import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from  '../../shared/global'

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  

  constructor(private http: HttpClient) {}

  getNewestStories(page: number, itemsPerPage: number, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page);
    params = params.set('itemsPerPage', itemsPerPage);
    if (searchTerm) {
      params = params.set('searchTerm', searchTerm);
    }

    return this.http.get(Global.BASE_API_PATH +"Story/GetStories", { params });
  }
}
