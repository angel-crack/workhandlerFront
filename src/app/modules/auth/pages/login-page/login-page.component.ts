import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../../core/validators/password-match.validator'


import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UsersService } from '@modules/auth/services/users.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy{

  constructor(
    private authService:AuthService,
    private _snackBar:MatSnackBar,
    private cookieService: CookieService,
    private router:Router,
    private userService: UsersService
  ){}
  formLogin: FormGroup = new FormGroup({});
  formSignUp: FormGroup = new FormGroup({});
  formResetPass: FormGroup = new FormGroup({});

  listSubscription$: Subscription[] = [];
  
  hide = true;
  
  snackBarConfig: MatSnackBarConfig = {
    duration: 1500
  }

  tabIndex = 0
  ariaValid = true

  ngOnInit(): void {
    const tabSelect$: Subscription = this.userService.TabSelect.subscribe( 
      v => {
        this.tabIndex = v
        this.formSignUp.reset()
    })
    this.listSubscription$.push(tabSelect$)
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    });

    this.formSignUp = new FormGroup({
      name: new FormControl('',[]),
      lastName: new FormControl('',[]),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('',[]),
      repeatPassword: new FormControl('',[]),
      role: new FormControl('',[])
    });

    this.formResetPass = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    });
  }

  login(){
    const {email, password} = this.formLogin.value;
    this.authService.authenticate$(email,password).subscribe({
      next: v => {
        console.log("current token: ",this.cookieService.get(environment.tokenName))
        console.log("response token: ",v.jwToken)
        this.cookieService.set(environment.tokenName, v.jwToken);
        console.log("token set: ", this.cookieService.get(environment.tokenName));
        this.router.navigate(['/','cases'])
      },
      error: e => {
        this._snackBar.open(
          e.error.msj,'',this.snackBarConfig)
      }
    })
  }

  createUser(): void{
    const valueForm = this.formSignUp.value
    this.userService.createUser$(valueForm)
  }

  ngOnDestroy(): void {
    this.listSubscription$.forEach( u => { u.unsubscribe } )    
  }
}
