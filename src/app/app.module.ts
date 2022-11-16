import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import {EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoute } from './route';
import {RouterModule} from '@angular/router'; 
import { Error404Component } from './errors/404.component';
import {
  EventDetailsComponent, 
  EventThumbnilComponent,
  EventListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventService,
  CreateSessionComponent
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list.component';


@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoute), 
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent, 
    EventListComponent,
    EventThumbnilComponent, 
    NavBarComponent, 
    EventDetailsComponent, 
    CreateEventComponent,
    Error404Component, 
    CreateSessionComponent, 
    SessionListComponent
  ], 
  bootstrap: [EventsAppComponent], 
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator, 
    {
      provide: 'canDeactivateCreateEvent',     
      useValue: checkDirtyState
    }, 
    EventListResolver, 
    AuthService,
  ]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you want to cancel?')
  return true; 
}
