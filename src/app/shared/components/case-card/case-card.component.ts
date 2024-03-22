import { Component, Input } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';
import { WebexNotesModalComponent } from '../modals/webex-notes-modal/webex-notes-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css']
})
export class CaseCardComponent {
  
  constructor(private dialogRef: MatDialog) {}

  @Input() case: CaseModel = {
    'name' : '',
    'number' : '',
    'folder' : '',
    'problem_description' : '',
    'current_status' : '',
    'action_plan' : '',
    'last_action' : ''
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

}
