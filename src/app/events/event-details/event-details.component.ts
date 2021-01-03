import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared/index';
import { EventService } from '../shared/event.service';

@Component({
    selector: '',
    templateUrl: './event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right: 20px; }
    .event-image { height: 100px; }
    a { cursor: pointer}
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'name';
    constructor(private eventService: EventService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() { 
        // this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id']);
        this.activatedRoute.params.forEach((param: Params) => {
            this.event = this.eventService.getEvent(+param['id']);
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s =>
            s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelNewSesion() {
        this.addMode = false;
    }
}