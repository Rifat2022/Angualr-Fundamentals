import { Component , OnInit, Inject} from '@angular/core'
import { FormControl, FormGroup , FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service'
@Component({
  templateUrl: './profile.component.html', 
  styles: [`
      em {float: right; color: #E05C65 ; padding-left: 10px }
      .error input {background-color: #E3C3C5}
      .error ::-webkit-input-placeholder {color: #999}
      .error ::-moz-placeholder {color: #999}
      .error :-moz-placeholder {color: #999}
      .error :ms-input-placeholder {color: #999}
  `]
})
export class ProfileComponent implements OnInit {
  firstName: FormControl
  lastName: FormControl
  constructor(
    private authService: AuthService, 
    private router: Router, 
    @Inject(TOASTR_TOKEN) private toastr: Toastr, 
  ){}

  profileForm: FormGroup
       ngOnInit(): void {
        this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
        this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])

        this.profileForm = new FormGroup({
          firstName: this.firstName, 
          lastName: this.lastName
        })       
       }
       cancel(){
        this.router.navigate(['/events'])
       }
       saveProfile(formValues){
        if(this.profileForm.valid){
          this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
            .subscribe(()=> {
              this.toastr.success('Profile Saved');
            })         
        }
       }
       logout(){
        this.authService.logout().subscribe(() => {
          this.router.navigate(['/user/login'])
        })
       }
       validateFirstName(){
        return this.firstName.valid || this.firstName.untouched
       }
       validateLastName(){
        return this.lastName.valid || this.lastName.untouched
       }
       
}