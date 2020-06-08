import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stories } from './topStories';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataFromBackendService {
private _url:string="http://http://ec2-3-17-157-239.us-east-2.compute.amazonaws.com:5000/top-stories";
  constructor(private http:HttpClient) { }

  getData(): Observable<stories[]>{
    return this.http.get<stories[]>(this._url);
  }
}
