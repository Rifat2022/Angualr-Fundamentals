import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoute } from './route';
import {Router, RouterModule} from '@angular/router'; 
import { Error404Component } from './errors/404.component';
import {JQ_TOKEN, 
  TOASTR_TOKEN, 
  Toastr, 
  CollapsibleWellComponent, 
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import {
  EventDetailsComponent, 
  EventThumbnilComponent,
  EventListComponent,
  CreateEventComponent,

  EventListResolver,
  EventService,
  CreateSessionComponent,
  DurationPipe,
  UpvoteComponent,
  voterService,
  LocationValidator,
  EventResolver
} from './events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListComponent } from './events/event-details/session-list.component';


let toastr:Toastr =window['toastr']
let jQuery =window['$']
@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoute), 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
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
    SessionListComponent, 
    CollapsibleWellComponent, 
    DurationPipe, 
    SimpleModalComponent, 
    ModalTriggerDirective, 
    UpvoteComponent,
    LocationValidator
  ], 
  bootstrap: [EventsAppComponent], 
  providers: [
    EventService, 
    {provide: TOASTR_TOKEN, useValue: toastr}, 
    {provide: JQ_TOKEN, useValue: jQuery}, 
     EventResolver,
    {
      provide: 'canDeactivateCreateEvent',     
      useValue: checkDirtyState
    }, 
    EventListResolver, 
    AuthService,
    voterService
  ]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you want to cancel?')
  return true; 
}
