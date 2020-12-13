import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) { }

    resolve() {
        // we just getting and returning hte values, we are not return subscribe: as this is subscription not observable, hence we just mapping and returning observable for angyalr to know when data was loaded
       return this.eventService.getEvents().pipe(map(events => events));
    }
    
}