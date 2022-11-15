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
  EventService
} from './events/index'


@NgModule({
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoute), 
  ],
  declarations: [
    EventsAppComponent, 
    EventListComponent,
    EventThumbnilComponent, 
    NavBarComponent, 
    EventDetailsComponent, 
    CreateEventComponent,
    Error404Component
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
    EventListResolver
  ]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you want to cancel?')
  return true; 
}
