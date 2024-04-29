import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CaseModel } from 'src/app/core/models/cases.models';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { CaseOptionalModel } from 'src/app/core/models/cases-optional.models';

@Injectable({
  providedIn: 'root'
})
export class GetCasesService {
  constructor(
    private http:HttpClient,
    private cookieService:CookieService
  ){}

  private readonly URL = environment.api;
  
  private readonly options = {
    // headers: new HttpHeaders().set('Authorization', this.cookieService.get(environment.tokenName))
    headers: new HttpHeaders()
      .set('Authorization', this.cookieService.get(environment.tokenName))
      .set('Content-Type', 'application/x-www-form-urlencoded')
  }
  getAllMyCases$(type:string): Observable<any> {
    return this.http.get(`${this.URL}/cases/${type}`,this.options)
  }

  updateCase$(content: CaseOptionalModel,id:string): Observable<any> {
    let body = new URLSearchParams();
    console.log(body)
    // body.set('email', email);
    // body.set('password',password);
    for (const [key, value] of Object.entries(content)) {
      body.set(`${key}`,`${value}`)
    }
    console.log(body)
    // let options = {
    //   headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    // }
    return this.http.put(
      `${this.URL}/cases/${id}`,
      body.toString(), 
      this.options)
  }

}
