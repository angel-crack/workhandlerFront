import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';
import { WebexNotesModalComponent } from '../modals/webex-notes-modal/webex-notes-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CaseOptionalModel } from 'src/app/core/models/cases-optional.models';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { CasesService } from '@modules/cases/services/cases.service';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css']
})
export class CaseCardComponent {
  
  @Input() case: CaseModel = {
    '_id': '',
    'tittle' : '',
    'number' : '',
    'problem_description' : '',
    'current_status' : '',
    'action_plan' : '',
    'last_action' : '',
    'state': true
  }

  @Output() updateCases = new EventEmitter<{content: CaseOptionalModel, id: string, type: string}>();

  constructor(
    private dialogRef: MatDialog,
    private caseService: CasesService
    ) {}


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
  
  updateCasesMethod(content: CaseOptionalModel, case_id: string, type: string) {
    let snackBarMessage:string = 'Moved to: Cases'
    if(this.case.state == true){
      snackBarMessage = 'Moved to: History'
    }
    this.caseService.updateCase$(content, case_id, type, snackBarMessage)
  }

  deleteCaseMethod(case_id: string, type:string):void {
    let snackBarMessage:string = 'Case Archived Deleted'
    if(this.case.state == true){
      snackBarMessage = 'Case Deleted'
    }
    this.caseService.deleteCase$(case_id, type, snackBarMessage)
  }

}
