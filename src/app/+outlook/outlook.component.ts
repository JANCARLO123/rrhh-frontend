import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Rx";

import {Folder, Outlook, OutlookService} from "./shared";

@Component({
  selector: 'sa-outlook',
  templateUrl: 'outlook.component.html',
})
export class OutlookComponent implements OnInit {

  outlook:Outlook;
  outlookSub:Subscription;

  activeFolderKey:string;
  activeFolder:Folder;
  activeFolderSub:Subscription;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private outlookService:OutlookService) {
    this.outlook = new Outlook();
    this.activeFolder = new Folder()
  }


  ngOnInit() {
    this.outlookSub = this.outlookService.getOutlook().subscribe(
      outlook => {
        this.outlook = outlook
      }
    );

    this.activeFolderSub = this.outlookService.activeFolder.subscribe(
      folder => {
        this.activeFolderKey = folder;
        if (this.outlook.folders) {
          this.activeFolder = this.outlook.folders.find(it=>it.key == folder)
        }
      }
    )
  }

  ngOnDestroy() {
    this.outlookSub.unsubscribe();
    this.activeFolderSub.unsubscribe();
  }

  deleteSelected(){
    this.outlookService.deleteSelected()
  }

}
