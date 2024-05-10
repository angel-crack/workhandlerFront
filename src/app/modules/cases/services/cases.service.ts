import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { CaseOptionalModel } from 'src/app/core/models/cases-optional.models';
import { CaseModel } from 'src/app/core/models/cases.models';
import { SnackbarMessageComponent } from 'src/app/shared/sub-modules/snackbar-message/snackbar-message.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class CasesService {

  constructor(
    private http:HttpClient,
    private cookieService:CookieService,
    private snackMessage: SnackbarMessageComponent,
    private dialogRef: MatDialog
  ){}

  Cases:BehaviorSubject<any> = new BehaviorSubject<any>(null)
  CasesHistory:BehaviorSubject<any> = new BehaviorSubject<any>(null)

  private readonly URL = environment.api;
  
  private readonly options = {
    headers: new HttpHeaders()
      .set('Authorization', this.cookieService.get(environment.tokenName))
      .set('Content-Type', 'application/x-www-form-urlencoded')
  }

  snackConfig: MatSnackBarConfig = {horizontalPosition: 'center',duration:2000};

  getAllMyCases$(type:string): void {
    this.http.get(`${this.URL}/cases/${type}`,this.options).subscribe({
      next:  v => { 
        if(type == 'true'){
          this.Cases.next(v)
        }else{
          this.CasesHistory.next(v)
        }
      },
      error:  e => {console.log(e)}
    })
  }

  createCase$(content: CaseModel): void {
    let body = new URLSearchParams();

    for (const [key, value] of Object.entries(content)) {
      body.set(`${key}`,`${value}`)
    }

    this.http.post(`${this.URL}/cases/`,body.toString(),this.options).subscribe({
      next:  v => {this.dialogRef.closeAll()
                   this.snackMessage.openSnack('Case Created! Refreshing Case Page', this.snackConfig)
                   this.getAllMyCases$('true')
      },
      error:  e => {console.log(e)}
    })
  }

  updateCase$(content: CaseOptionalModel, id: string, type: string, msg: string): void {
    let body = new URLSearchParams();

    for (const [key, value] of Object.entries(content)) {
      body.set(`${key}`,`${value}`)
    }

    this.http.put( `${this.URL}/cases/${id}`, body.toString(), this.options).subscribe({
      next: v => {
        this.getAllMyCases$(type)
        this.snackMessage.openSnack(msg, this.snackConfig)
      },
      error: e => {
        console.log(e)
      }
    })
  }

  deleteCase$(id: string, type: string, msg: string): void {
    this.http.delete( `${this.URL}/cases/${id}`, this.options).subscribe({
      next: v => {
        this.snackMessage.openSnack(msg, this.snackConfig)
        this.getAllMyCases$(type)
      },
      error: e => {
        console.log(e)
      }
    })
  }  

  SeedSomeCases$(i1: number, i2:number): void {
    
    this.http.get(`${this.URL}/seed/${i1}_${i2}`,this.options).subscribe({
      next: v => {
        this.getAllMyCases$('true')
        this.snackMessage.openSnack(`${i2-i1+1} Cases Seed for this user`, this.snackConfig)
      },
      error: e => {
        console.log(e)
      }
    })
  }
}
