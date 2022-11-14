import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './common/toastr.service';
import {EventsAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventThumbnilComponent } from './events/event-thumbnil.component';
import { EventListComponent } from './events/events-list.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/navbar.component';
import { appRoute } from './route';
import {RouterModule} from '@angular/router'; 


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
    EventDetailsComponent
  ], 
  bootstrap: [EventsAppComponent], 
  providers: [EventService, ToastrService]
})
export class AppModule { }
