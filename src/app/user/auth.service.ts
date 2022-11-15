import { Injectable } from "@angular/core";
import { IUser } from "./user.model";   
@Injectable()
export class AuthService{
    currentUser: IUser
    loginUser(userName: string, password: string){
        this.currentUser = {
            id:1 , 
            userName: 'john', 
            firstName: 'papa', 
            lastName: 'de suza'
        }
    }
    isAuthenticaed(){
        return !!this.currentUser;
    }
}