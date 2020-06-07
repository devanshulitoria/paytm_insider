import { Component, OnInit } from '@angular/core';
import { GetDataFromBackendService } from './../get-data-from-backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-past-stories',
  templateUrl: './past-stories.component.html',
  styleUrls: ['./past-stories.component.css']
})
export class PastStoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
