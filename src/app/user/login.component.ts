import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
@Component({
    selector: 'login-temp',
    templateUrl: './login.component.html', 
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router){}
    userName
    password
    mouseoverLogin
    loginInvalid = false
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe( resp =>  {
                if(!resp){
                    this.loginInvalid = true; 
                }else{
                    this.router.navigate(['events'])
                }
            })
        
    }
    cancel(){
        this.router.navigate(['events'])
    }
}