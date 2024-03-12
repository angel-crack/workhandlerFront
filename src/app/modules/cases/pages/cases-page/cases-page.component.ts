import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetCasesService } from '@modules/cases/services/get-cases.service';
import { Subscription } from 'rxjs';
import { CaseModel } from 'src/app/core/models/cases.models';

@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.css']
})
export class CasesPageComponent implements OnInit, OnDestroy {

  listObservers$: Subscription[] = []
  cases: CaseModel[] = []

  constructor(private getCases: GetCasesService){}

  ngOnInit(): void {
    const observer1$: Subscription = this.getCases.dataCases$.subscribe(
      (res) => {
        this.cases = res
      }
    )
    this.listObservers$ = [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach( m => m.unsubscribe)
  }
}
