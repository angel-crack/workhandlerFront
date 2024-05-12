import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
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
    private cookieService: CookieService
  ) {}
  
  // Behavior Objects, 
  // TabSelect => Seleccionar Tab @ Login Page
  // UserInfo => Display information of user login @ user/header/home page
  TabSelect:BehaviorSubject<any> = new BehaviorSubject<any>(0)
  UserInfo:BehaviorSubject<any> = new BehaviorSubject<any>({name : '', lastName: '', email: '', role: 'Tier 2'})
  
  // Configuracion del Snackbar cuando mostramos notificaciones
  snackConfig: MatSnackBarConfig = {horizontalPosition: 'center',duration:2000};

  // URL de la api usando variable de entorno
  private readonly URL = environment.api;
  private readonly TokenName = environment.tokenName
  
  // Headers sin Token, la usamos para crear usuario
  private readonly options_NoToken = {
    headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
  
  // Crear Usuario
  createUser$(content: UserModel): void {
    let body = new URLSearchParams();

    for (const [key, value] of Object.entries(content)) {
      body.set(`${key}`,`${value}`)
    }

    this.http.post(`${this.URL}/users/`,body.toString(),this.options_NoToken).subscribe({
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

  // Async function para obtner el valor del token
  async getTokenAsync(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        const token = this.cookieService.get(this.TokenName);
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  }


  // Async funtion para setear los headers del request una vez se obtenga el token
  async getOptionsAfter(): Promise<any> {
    const token = await this.getTokenAsync();
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Content-Type', 'application/x-www-form-urlencoded');
    return { headers: headers };
  }


  // Obtener informacion de usuario basado en el token
  getUserInfo$(): void {
    this.getOptionsAfter().then(options => {
      this.http.get(`${this.URL}/users`, options).subscribe({
        next: v => {
          console.log("Response User: ", v)
          this.UserInfo.next(v)
        }
      });
    }).catch(error => {
      console.error('Error:', error);
    });
  }

}
