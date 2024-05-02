import { Component, OnDestroy, OnInit } from '@angular/core';
import { CasesService } from '@modules/cases/services/cases.service';
import { Subscription } from 'rxjs';
import { SnackbarMessageComponent } from 'src/app/shared/sub-modules/snackbar-message/snackbar-message.component';


@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.css']
})
export class CasesPageComponent implements OnInit, OnDestroy {
  
  constructor(private caseService: CasesService, private snackMessage: SnackbarMessageComponent){}

  listObservers$: Subscription[] = []
  cases: [] = []

  
  ngOnInit(): void {
    const observer1$: Subscription = this.caseService.getAllMyCases$('true').subscribe(
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
    const observer2$: Subscription = this.caseService.refreshCasesAfterDeletion$(a.content, a.id, a.type).subscribe({
      next: updatedCases => {
        this.cases = updatedCases;
        this.snackMessage.openSnack('Moved to history')
      },
      error: error => {
        console.error('Error refreshing cases after deletion:', error);
      }
    });
    this.listObservers$.push(observer2$);
  }
}
