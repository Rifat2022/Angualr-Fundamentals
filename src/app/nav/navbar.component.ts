import { Component, Inject } from '@angular/core'
import { EventService, ISession } from '../events';
import { AuthService } from '../user/auth.service'
@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px}
        #searchForm {margin-right: 100px}
        li > a.active {color: #F97924}
        @media (max-width: 1200px)
        {
            @searchForm {display: none}
        }
    `]
})
export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(
        public authService: AuthService,
        private eventService: EventService
    ) { }
    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions;
        })
    }

}