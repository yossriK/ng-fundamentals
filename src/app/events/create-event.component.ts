import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from './shared';

@Component({
    selector: 'selector-name',
    templateUrl: './create-event.component.html',
    styles: [`
    em { float: right; color:#05C65; padding-left:10px; }
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
    `]
})

export class CreateEventComponent implements OnInit {
    newEvent: IEvent;
    isDirty: boolean = true;
    constructor(private router: Router,
        private eventService: EventService) { }

    ngOnInit() { }

    saveEvent(formValues) {
       this.eventService.saveEvent(formValues);
       this.isDirty = false;
       this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}