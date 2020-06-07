import { Component, OnInit } from '@angular/core';
import { GetCommentfromBackendService } from './../get-commentfrom-backend.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments = [];
  showSpinner : boolean = true;
  constructor(private _backendService: GetCommentfromBackendService,private route:ActivatedRoute) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('id'));
    this._backendService.getData(id)
    .subscribe(data =>{ this.comments = data,console.log(data),this.showSpinner=false});
  }

}
