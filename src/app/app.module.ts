import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { 
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventDetailsComponent,
  EventService,
  EventThumbnailComponent,
  EventsListComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';


declare let toastr: Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent, 
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService,
              {
                provide: TOASTR_TOKEN, useValue: toastr
              },
              EventRouteActivator,
              EventListResolver,
              AuthService,
              {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
              }
            ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(' your not saved, you actually want to leave this');
  return true;
  // if just this reutrn is here: this will disable all routes
  //return false;
}