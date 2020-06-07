import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stories } from './topStories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPastStoriesService {
  private _url:string="http://localhost:5000/paststories";
  constructor(private http:HttpClient) { }
  getData(): Observable<stories[]>{
    return this.http.get<stories[]>(this._url);
  }
}
