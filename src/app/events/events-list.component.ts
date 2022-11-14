import { toBase64String } from '@angular/compiler/src/output/source_map';
import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import {ToastrService } from '../common/toastr.service'

@Component({
    selector: 'events-list',
    template:`
            <div>
                <h1>Upcoming Angular Events</h1>
                <hr>  
                
                <div class="row">
                    <div class="col-md-5" *ngFor="let event of events">
                        <event-thumbnil (click)="handleThumbnilClick(event.name)" [event]="event" > </event-thumbnil> 
                    </div>
                </div>                              
            </div>
            ` 

})
export class EventListComponent implements OnInit{
   events:any[]; 
   constructor(private eventService: EventService, private toastr: ToastrService) {
    //super();
    
   }
   ngOnInit(){
    this.events = this.eventService.getEvents();
   }
   handleThumbnilClick(eventName){
    this.toastr.success(eventName); 
   }
}