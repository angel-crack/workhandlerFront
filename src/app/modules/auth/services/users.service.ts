import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/core/models/users.models';
import { SnackbarMessageComponent } from 'src/app/shared/sub-modules/snackbar-message/snackbar-message.component';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private snackMessage: SnackbarMessageComponent,
  ) { }
  
  snackConfig: MatSnackBarConfig = {horizontalPosition: 'center',duration:2000};

  TabSelect:BehaviorSubject<any> = new BehaviorSubject<any>(0)

  private readonly URL = environment.api;
  private readonly options = {
  
  headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
  }
  
  createCase$(content: UserModel): void {
    let body = new URLSearchParams();

    for (const [key, value] of Object.entries(content)) {
      body.set(`${key}`,`${value}`)
    }

    this.http.post(`${this.URL}/users/`,body.toString(),this.options).subscribe({
      next:  v => {
                   this.snackMessage.openSnack('User Created!', this.snackConfig)
                   console.log(v)
                   this.TabSelect.next(0)
      },
      error:  e => {
        const error = e.error.error
        if (error.hasOwnProperty('errorResponse')){
          this.snackMessage.openSnack('Email is already taken', this.snackConfig)
        }
        if (error.hasOwnProperty('details')){
          this.snackMessage.openSnack(error.details[0].message, this.snackConfig)
        }
        console.log(e)
      }
    })
  }

}
