import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OutlookService, Message} from "../shared";

@Component({
  selector: 'sa-compose',
  templateUrl: 'compose.component.html',
})
export class ComposeComponent implements OnInit {

  public message:Message;


  public carbonCopy:boolean = false;
  public blindCarbonCopy:boolean = false;
  public attachments:boolean = false;

  public sending:boolean = false;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:OutlookService) {

  }

  ngOnInit(){
    this.message = new Message({})

  }

  send() {
    this.sending = true;
    setTimeout(()=> {
      this.router.navigate(['/outlook'])
    }, 2000)
  }
}
