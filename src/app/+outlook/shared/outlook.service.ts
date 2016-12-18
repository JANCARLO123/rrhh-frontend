import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx'

import {Outlook} from './outlook'
import {Message} from "./message";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {JsonApiService} from "../../shared/api/json-api.service";

@Injectable()
export class OutlookService {

  public activeFolder: Subject<any>;

  public messages: Subject<any>;

  private state = {
    lastFolder: '',
    messages: []
  };

  constructor(private jsonApiService: JsonApiService) {
    this.activeFolder = new Subject();
    this.messages = new Subject();
  }

  getOutlook(): Observable<Outlook> {
    return this.jsonApiService.fetch('/outlook/outlook.json')
  }

  getMessages(folder: string) {

    this.jsonApiService.fetch('/outlook/' + folder + '.json')

      .map(this.mapToMessages)
      .do(data => {
        this.state.lastFolder = folder;
        this.state.messages = data;

        this.activeFolder.next(folder);
        this.messages.next(this.state.messages);
        return data
      })

      .subscribe();

  }

  getMessage(id: string) {
    return this.jsonApiService.fetch('/outlook/message.json')
  }

  deleteSelected() {

    this.messages.next(this.state.messages.filter((it)=>!it.selected))
  }

  private mapToMessages(rawMessages): Array<Message> {
    return rawMessages.map(it=>new Message(it))
  }

}
