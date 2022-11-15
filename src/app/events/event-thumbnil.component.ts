import { Component , Input, Output, EventEmitter} from '@angular/core'
import { IEvent } from './shared/index';
@Component({
    selector: "event-thumbnil", 
    template: `
    <div class="well hoverwell thumbnil" [routerLink]="['/events',event.id ]">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div> 
        <div [ngSwitch]="event?.time" [ngStyle]="getStartTimeStyle()">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div> 
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            
            <span class="pad-left">{{event?.location?.city}}, {{event?.location.country}}</span>
        </div> 
        <div [hidden]="!event?.onlineUrl">
            Online url: {{event?.onlineUrl}}
        </div>
       
    </div>
    `, 
    styles:[`
            .red{color: red !important;}
            .bold{ font-weight: bold; }
            .thumbnil {min-height: 210px; }
            .pad-left {margin-left:10px; }
            .well div {color: #bbb; }
    `]
})
export class EventThumbnilComponent {
    @Input() event:IEvent;   
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart}
        if(this.event && this.event.time === '8:00 am')
            return 'green bold'; // or we can return ['green', 'bold']
        else
            return ''; // or we can return []
    }
    getStartTimeStyle():any{
        if(this.event && this.event.time === '8:00 am')
            {
                return {color: '#003300', 'font-weight': 'bold'}
            }
            else{
                return {}
            }
    }
}