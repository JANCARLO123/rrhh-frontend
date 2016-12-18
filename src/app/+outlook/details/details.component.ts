import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Message} from "../shared/message";
import {Subscription} from "rxjs/Rx";
import {OutlookService} from "../shared/outlook.service";

@Component({
  selector: 'sa-details',
  templateUrl: 'details.component.html',
})
export class DetailsComponent implements OnInit {

  public message:Message;
  public messageSub:Subscription;
  public paramsSub:Subscription;

  constructor(private route:ActivatedRoute,
              private service:OutlookService) {

  }

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params)=> {
      this.messageSub = this.service.getMessage(params['id']).subscribe(message =>
        this.message = new Message(message)
      )
    })
  }
}


