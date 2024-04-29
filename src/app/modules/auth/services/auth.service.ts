import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) {}

  private readonly URL = environment.api;

  
  authenticate$(email: string , password: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password',password)
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    }
    return this.http.post(
      `${this.URL}/auth`,
      body.toString(), 
      options)
  }
}
