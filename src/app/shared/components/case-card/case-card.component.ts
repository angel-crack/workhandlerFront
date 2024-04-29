import { Component, Input } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';
import { WebexNotesModalComponent } from '../modals/webex-notes-modal/webex-notes-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { GetCasesService } from '@modules/cases/services/get-cases.service';
import { CaseOptionalModel } from 'src/app/core/models/cases-optional.models';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css']
})
export class CaseCardComponent {
  
  constructor(
    private dialogRef: MatDialog,
    private caseService:GetCasesService,
    private _snackBar:MatSnackBar,
    private router:Router) {}

  @Input() case: CaseModel = {
    '_id': '',
    'tittle' : '',
    'number' : '',
    'problem_description' : '',
    'current_status' : '',
    'action_plan' : '',
    'last_action' : ''
  }

  snackBarConfig: MatSnackBarConfig = {
    duration: 1500
  }

  checkName(caseName:string,caseNumber:string){
    var completeName = caseNumber + ' - ' + caseName;
    if(completeName.length > 33){
      completeName = completeName.slice(0,32) + '...'
    }
    return completeName
  }

  openModal():void {
    this.dialogRef.open(WebexNotesModalComponent,{
      height: '70vh',
      width: '60vw',
    })
  }

  showid():void {
    console.log(this.case._id)
    let state: CaseOptionalModel = {
      state: false
    }
    console.log(state);
    this.caseService.updateCase$(state,this.case._id).subscribe({
      next: v => {
        console.log(v);
        this._snackBar.open(
          'Case Moved','',this.snackBarConfig);
        this.router.navigate(['/','cases'])
      },
      error: e => {
        console.log(e)
      }
    })
  }

}
