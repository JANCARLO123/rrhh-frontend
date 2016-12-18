import { Injectable } from '@angular/core';

import EVENTS_MOCK from './EVENTS_MOCK';
import {externalEvents} from './EXTERNAL_EVENTS_MOCK';
import {Subject} from "rxjs/Rx";


@Injectable()
export class EventsService {

  public store: any = {
    events: EVENTS_MOCK,
    externalEvents
  };
  
  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject();
  }

  subscribe(next, error?, complete?){
    return this.subject.subscribe(next, error, complete)
  }

  addExternalEvent(event){
    this.store.externalEvents.push(event)
    this.subject.next(this.store)
  }
}
