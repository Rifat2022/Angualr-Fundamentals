import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IUser } from "./user.model";   
@Injectable()
export class AuthService {
    currentUser: IUser
    constructor(private http: HttpClient){}
    loginUser(userName: string, password: string){
        // this.currentUser = {
        //     id:1 , 
        //     userName: 'john', 
        //     firstName: 'papa', 
        //     lastName: 'de suza'
        // }
        let loginInfo = {username: userName, password: password}
        let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        return this.http.post('api/login', loginInfo, options)
            .pipe(tap( data => {
                this.currentUser = <IUser>data['user']
            }))
            .pipe(catchError(err =>  {
                return of(false)
            }))
    }
    isAuthenticaed(){
        return !!this.currentUser
    }
    checkAuthenticationStatus(){
        this.http.get('api/currentIdentity')
            .subscribe(data => {
                if(data instanceof Object){
                    this.currentUser = <IUser> data; 
                }
            })
    }
    updateCurrentUser(firstName: string, lastName : string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        return this.http.put(`/api/users/${this.currentUser.id}`,this.currentUser, options )

    }
    logout(){
        this.currentUser = undefined; 
        let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
        return this.http.post('api/logout', {}, options)
    }
}