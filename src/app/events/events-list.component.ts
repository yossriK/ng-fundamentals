import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

// bad to do this globaly as what about testing and mockign later on, we not even injecting this guy
//declare let toastr; // let ts know this is in scope somewhere else

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit { // typescript safety is to implement this interface when we usign this ngonint method
    events: any[];
    constructor(private eventSrevice: EventService,
        private toastr: ToastrService) { 
      
    }

    ngOnInit() { 
        this.events = this.eventSrevice.getEvents();// these are bad to have in constructor
    }
    
    handleThumbnailClick(eventName){
        this.toastr.success(eventName);
    }

}

