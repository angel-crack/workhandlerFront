import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CasesService } from '@modules/cases/services/cases.service';
import { Subscription } from 'rxjs';
import { SharedDataFromModalService } from 'src/app/shared/components/modals/services/shared-data-from-modal.service';
import { SnackbarMessageComponent } from 'src/app/shared/sub-modules/snackbar-message/snackbar-message.component';


@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.css']
})
export class CasesPageComponent implements OnInit, OnDestroy {
  
  constructor(private caseService: CasesService, 
              private snackMessage: SnackbarMessageComponent, 
              private dataService: SharedDataFromModalService,
              private dialogRef: MatDialog){}

  listObservers$: Subscription[] = []
  cases: [] = []

  
  ngOnInit(): void {
    const observer1$: Subscription = this.caseService.getAllMyCases$('true').subscribe(
      (res) => {
        this.cases = res
      }
    )
    const observer3$: Subscription = this.dataService.getData().subscribe((data: any) => {
      this.caseService.createCase$(data).subscribe({
        next: v => {
          console.log(v)
          this.caseService.getAllMyCases$('true').subscribe(
            (res) => {
              this.cases = res
              this.dialogRef.closeAll();
              this.snackMessage.openSnack('New Case Created')
            }
      )},
        error: e => {this.snackMessage.openSnack(e.error.error.details[0].message)}
      })
    });
    this.listObservers$ = [observer1$, observer3$]
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

  newCase( a: any ): void{
    console.log("from case component ==> ", a)
  }

}
