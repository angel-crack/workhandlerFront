import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetCasesService } from '@modules/cases/services/get-cases.service';
import { Subscription } from 'rxjs';
import { CaseOptionalModel } from 'src/app/core/models/cases-optional.models';
import { CaseModel } from 'src/app/core/models/cases.models';
import { CaseFilterPipe } from 'src/app/shared/pipes/case-filter.pipe';
import { NormalizeCasesPipe } from 'src/app/shared/pipes/normalize-cases.pipe';
import { SnackBarMessage } from '@modules/sub-modules/update_cases';

@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.css']
})
export class CasesPageComponent implements OnInit, OnDestroy {
  
  constructor(private getCases: GetCasesService){}

  listObservers$: Subscription[] = []
  cases: [] = []

  
  ngOnInit(): void {
    const observer1$: Subscription = this.getCases.getAllMyCases$('true').subscribe(
      (res) => {
        this.cases = res
      }
    )
    this.listObservers$ = [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach( m => m.unsubscribe)
  }

  updateCase( a: any ): void{
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
