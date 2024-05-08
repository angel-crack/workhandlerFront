import { Component, OnDestroy, OnInit } from '@angular/core';
import { CasesService } from '@modules/cases/services/cases.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.css']
})
export class CasesPageComponent implements OnInit, OnDestroy {
  
  constructor(private caseService: CasesService){}

  listObservers$: Subscription[] = []
  cases: [] = []
  
  
  ngOnInit(): void {
    this.caseService.getAllMyCases$('true')
    const caseObserver$:Subscription = this.caseService.Cases.subscribe( v => this.cases = v)
    this.listObservers$.push(caseObserver$)
  }
  
  ngOnDestroy(): void {
    this.listObservers$.forEach( m => m.unsubscribe)
  }

}
