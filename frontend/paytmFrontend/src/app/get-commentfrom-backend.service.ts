import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { comments } from './comments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCommentfromBackendService {
  private _url:string="http://localhost:5000/comments/";
  constructor(private http:HttpClient) { }
  getData(ide): Observable<comments[]>{
    return this.http.get<comments[]>(this._url+ide);
  }
}
