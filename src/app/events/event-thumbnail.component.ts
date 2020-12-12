// this will get display for one item/event then in the events-list we display many of these 
// how to inject an event here
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
    <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Date: \${{event.price}}</div>
        <div>
            <span>Location" {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}
            </span>
        </div>
    </div>
</div> `
})

export class EventThumbnailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Input() event: any; // dont care what data type this is for now
}