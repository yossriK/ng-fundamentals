import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
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
  CreateSessionComponent
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent, 
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EventService,
              ToastrService,
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