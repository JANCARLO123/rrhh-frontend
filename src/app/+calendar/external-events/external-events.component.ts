import { Component, OnInit } from '@angular/core';
import {DraggableEvent} from "../draggable-event/draggable-event.directive";
import {EventsService} from "../shared/events.service";

@Component({
  selector: 'sa-external-events',
  templateUrl: 'external-events.component.html',
})
export class ExternalEventsComponent implements OnInit {

  public events: Array<any>;
  constructor(private eventsService: EventsService) {}

  private sub: any;

  ngOnInit() {
    this.events = this.eventsService.store.externalEvents;
    this.sub = this.eventsService.subscribe((store)=>{
      this.events = store.externalEvents
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

}
