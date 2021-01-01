import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { 
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    EventDetailsComponent,
    EventsListComponent,
    CreateSessionComponent
  } from './events/index'

// array of route objects
export const appRoutes: Routes = [
    { path: 'user', loadChildren: './user/user.module#UserModule'},
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' }, // defialt route so if user goes to default route we want to take them somewhere specific. and path match can be prefix that means if it starts with this path string you redirect, if it fully matches then redirect is pathMatch: full
    { path: '404', component: Error404Component }
]