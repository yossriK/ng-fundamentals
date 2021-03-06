// this will get display for one item/event then in the events-list we display many of these 
// how to inject an event here
import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div>
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name | uppercase}}</h2>
            <div>Date: {{event?.date | date:'shortDate'}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase= "'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase= "'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>price: {{event.price | currency:'USD'}}</div>
        <div *ngIf="event?.location">
            <span>Location" {{event?.location.address}}</span>
            <span>&nbsp;</span>
            <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}
            </span>
        </div>
        <div [hidden]="!event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>
    </div>
</div> `,
    styles: [`
        .thumbnail { min-height: 240px;}
        .green {color: #003300 !important; }
        .bold { font-weight: bold; }
    `]
})

export class EventThumbnailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
  //  @Input() event: any; // dont care what data type this is for now; this is old javascript, notice how we using 'any'
  @Input() event: IEvent;

    someProperty: string = "some property form "
    logFoo(){
        console.log('foo');
    }

    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return  ['green', 'bold'] //'green bold'; // 
        return [];
        // if wanna use ngStyle="getStartTimeStyle"
        //return {color: color#, style2: styel2optuion}
    }
}