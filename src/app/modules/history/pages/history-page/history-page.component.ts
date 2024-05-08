import { Component, OnDestroy, OnInit } from '@angular/core';
import { CasesService } from '@modules/cases/services/cases.service';
import { Subscription } from 'rxjs';
import { SnackbarMessageComponent } from 'src/app/shared/sub-modules/snackbar-message/snackbar-message.component';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit,OnDestroy{
  constructor(private caseService:CasesService, 
              private snackMessage: SnackbarMessageComponent){}

  listObservers$: Subscription[] = []
  cases: [] = []

  ngOnInit(): void {
    this.caseService.getAllMyCases$('false')
    const observer1$:Subscription = this.caseService.CasesHistory.subscribe( v => this.cases = v)
    this.listObservers$.push(observer1$)
  }
  
  ngOnDestroy(): void {
    this.listObservers$.forEach( m => m.unsubscribe)
  }
}
