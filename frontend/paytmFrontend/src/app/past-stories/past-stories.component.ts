import { Component, OnInit } from '@angular/core';
import { GetPastStoriesService } from './../get-past-stories.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-past-stories',
  templateUrl: './past-stories.component.html',
  styleUrls: ['./past-stories.component.css']
})
export class PastStoriesComponent implements OnInit {
  public stories = [];
  showSpinner : boolean = true;
  constructor(private _backendService: GetPastStoriesService,private router:Router) { }

  ngOnInit() {
    this._backendService.getData()
    .subscribe(data =>{ this.stories = data,console.log(data),this.showSpinner=false});
  }
  onSelect(department){
    this.router.navigate(['/comments',department._id]);
}
}
