import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { CaseOptionalModel } from 'src/app/core/models/cases-optional.models';

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  constructor(
    private http:HttpClient,
    private cookieService:CookieService
  ){}

  private readonly URL = environment.api;
  
  private readonly options = {
    headers: new HttpHeaders()
      .set('Authorization', this.cookieService.get(environment.tokenName))
      .set('Content-Type', 'application/x-www-form-urlencoded')
  }
  getAllMyCases$(type:string): Observable<any> {
    return this.http.get(`${this.URL}/cases/${type}`,this.options)
  }

  updateCase$(content: CaseOptionalModel,id:string): Observable<any> {
    let body = new URLSearchParams();

    for (const [key, value] of Object.entries(content)) {
      body.set(`${key}`,`${value}`)
    }

    return this.http.put(
      `${this.URL}/cases/${id}`,
      body.toString(), 
      this.options)
  }
  refreshCasesAfterDeletion$(content: CaseOptionalModel,id:string,type:string): Observable<any> {
    return this.updateCase$(content,id).pipe(
      switchMap(() => this.getAllMyCases$(type))
    );
  }
}
