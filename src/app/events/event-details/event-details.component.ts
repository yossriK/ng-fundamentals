import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
    selector: '',
    templateUrl: './event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent implements OnInit {
    event: any;
    constructor(private eventService: EventService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() { 
        this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
    }
}