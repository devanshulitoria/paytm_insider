import { Component, OnInit } from '@angular/core';
import { GetDataFromBackendService } from './../get-data-from-backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  public stories = [];
  showSpinner : boolean = true;
  public errorMsg;
  constructor(private _backendService: GetDataFromBackendService,private router:Router) { }

  ngOnInit() {
    this._backendService.getData()
      .subscribe(data =>{ this.stories = data,console.log(data),this.showSpinner=false});
  }
  onSelect(department){
      this.router.navigate(['/comments',department._id]);
  }

}
