import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {EventsAppComponent } from './events-app.component';
import { EventThumbnilComponent } from './events/event-thumbnil.component';
import { EventListComponent } from './events/events-list.component';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent, 
    EventListComponent,
    EventThumbnilComponent, 
    NavBarComponent
  ], 
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
