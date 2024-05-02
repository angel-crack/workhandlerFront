import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetCasesService } from '@modules/cases/services/get-cases.service';
import { Subscription } from 'rxjs';
import { CaseOptionalModel } from 'src/app/core/models/cases-optional.models';
import { CaseModel } from 'src/app/core/models/cases.models';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit,OnDestroy{
  constructor(private getCases:GetCasesService){}

  listObservers$: Subscription[] = []
  cases: [] = []

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

  updateCase( a: any): void{
    const observer2$: Subscription = this.getCases.refreshCasesAfterDeletion$(a.content, a.id, a.type).subscribe({
      next: updatedCases => {
        this.cases = updatedCases; // Update the cases variable with the updated cases
      },
      error: error => {
        console.error('Error refreshing cases after deletion:', error);
        // Handle error if needed
      }
    });
    this.listObservers$.push(observer2$);
  }


}
