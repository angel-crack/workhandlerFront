import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebexNotesModalComponent } from '../modals/webex-notes-modal/webex-notes-modal.component';

@Component({
  selector: 'app-case-card-options',
  templateUrl: './case-card-options.component.html',
  styleUrls: ['./case-card-options.component.css']
})
export class CaseCardOptionsComponent {

  visible: boolean = false

  constructor(private dialogRef: MatDialog) {}

  showMenu():void {
    this.visible = !this.visible
  }

  openModal():void {
    this.showMenu();
    this.dialogRef.open(WebexNotesModalComponent,{
      height: '70vh',
      width: '60vw',
    })
  }
  
}
