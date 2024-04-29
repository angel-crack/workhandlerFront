import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetCasesService } from '@modules/cases/services/get-cases.service';
import { Subscription } from 'rxjs';
import { CaseModel } from 'src/app/core/models/cases.models';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit,OnDestroy{
  listObservers$: Subscription[] = []
  cases: [] = []

  constructor(private getCases:GetCasesService){}

  ngOnInit(): void {
    const observer1$:Subscription = this.getCases.getAllMyCases$('false').subscribe(
      (res) => {
        this.cases = res
      }
    )
    this.listObservers$.push(observer1$)
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach( m => m.unsubscribe)
  }


}
