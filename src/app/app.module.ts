import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import {EventsAppComponent } from './events-app.component';
import { EventThumbnilComponent } from './events/event-thumbnil.component';
import { EventListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent, 
    EventListComponent,
    EventThumbnilComponent, 
    NavBarComponent, 
    
  ], 
  bootstrap: [EventsAppComponent], 
  providers: [EventService, ToastrService]
})
export class AppModule { }
