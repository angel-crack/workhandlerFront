import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';


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
    private router:Router
  ){}
  formLogin: FormGroup = new FormGroup({});

  listSubscription$: Subscription[] = [];
  
  hide = true;
  
  snackBarConfig: MatSnackBarConfig = {
    duration: 1500
  }


  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    })
  }

  login(){
    const {email, password} = this.formLogin.value;
    this.authService.authenticate$(email,password).subscribe({
      next: v => {
        this.cookieService.set('session', v.jwToken);
        this.router.navigate(['/','cases'])
      },
      error: e => {
        this._snackBar.open(
          e.error.msj,'',this.snackBarConfig)
      }
    })
  }


  ngOnDestroy(): void {
    this.listSubscription$.forEach( u => { u.unsubscribe } )    
  }
}
