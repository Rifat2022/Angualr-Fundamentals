import {Component} from '@angular/core'
import {Router} from '@angular/router'
import { EventService } from './shared';
@Component({
    selector: 'create-event', 
    templateUrl:'./create-event.component.html', 
    styles: [`
    em {float: right; color: #E05C65 ; padding-left: 10px }
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}
`]
})
export class CreateEventComponent{
    newEvent
 
    isDirty:boolean = true; 
    constructor(
        private router: Router, 
        private eventService: EventService
    ){}
    
    cancel(){
        this.router.navigate(['/events'])
    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false
            this.router.navigate(['/events'])
        })
        
    }
}