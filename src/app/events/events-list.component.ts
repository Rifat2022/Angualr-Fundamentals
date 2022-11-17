import { toBase64String } from '@angular/compiler/src/output/source_map';
import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    
    template:`
            <div>
                <h1>Upcoming Angular Events</h1>
                <hr>  
                
                <div class="row">
                    <div class="col-md-5" *ngFor="let event of events">
                        <event-thumbnil  [event]="event" > </event-thumbnil> 
                    </div>
                </div>                              
            </div>
            ` 

})
export class EventListComponent implements OnInit{
   events:IEvent[]; 
   constructor(private eventService: EventService, private route: ActivatedRoute) {
    //super();
    
   }
   ngOnInit(){
    // this.eventService.getEvents().subscribe(events=>{
    //     this.events = events; 
    // });
    this.events = this.route.snapshot.data['events']
   }
   
}