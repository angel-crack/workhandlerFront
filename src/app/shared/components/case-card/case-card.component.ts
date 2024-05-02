import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    private _snackBar:MatSnackBar
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
  moveCase():void {
    console.log(this.case.state)
  }
  showid():void {
    console.log(this.case._id)
    let state: CaseOptionalModel = {
      state: !this.case.state
    }

    console.log(state);
    

    // this.caseService.refreshCasesAfterDeletion$(state,this.case._id,this.case.state.toString()).subscribe({
    //   next: v => {
    //     console.log(v);
    //     this._snackBar.open(
    //       'Case Moved','',this.snackBarConfig);
    //     // this.router.navigate(['/','cases'])
    //   },
    //   error: e => {
    //     console.log(e)
    //   }
    // })
    
    
  } 
  updateCasesMethod(content: CaseOptionalModel, case_id: string, type: string, msg?:string) {
    const data = {
      content: content,
      id: case_id,
      type: type,
      msg: msg
    }
    console.log("case card ==> ", data)
    this.updateCases.emit(data);
  }
}
