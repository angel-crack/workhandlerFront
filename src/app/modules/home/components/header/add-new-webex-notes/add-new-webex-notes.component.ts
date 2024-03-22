import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WebexNotesModalComponent } from 'src/app/shared/components/modals/webex-notes-modal/webex-notes-modal.component';

@Component({
  selector: 'app-add-new-webex-notes',
  templateUrl: './add-new-webex-notes.component.html',
  styleUrls: ['./add-new-webex-notes.component.css']
})
export class AddNewWebexNotesComponent {
  constructor(private dialogRef:MatDialog){}
  openModal():void {
    this.dialogRef.open(WebexNotesModalComponent,{
      height: '70vh',
      width: '60vw',
    })
  }
}
