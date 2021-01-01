import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';
import { EventService } from './shared/event.service';

// bad to do this globaly as what about testing and mockign later on, we not even injecting this guy
//declare let toastr; // let ts know this is in scope somewhere else

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit { // typescript safety is to implement this interface when we usign this ngonint method
    events: IEvent[];
    constructor(private eventSrevice: EventService,
        private route: ActivatedRoute) { 
      
    }

    ngOnInit() { 
        // these are bad to have in constructor
        // this.eventSrevice.getEvents().subscribe(events => {this.events = events}); this commented as now done in resolverS  
        // data is now passed in the route
        this.events = this.route.snapshot.data['events'];

    }
}

