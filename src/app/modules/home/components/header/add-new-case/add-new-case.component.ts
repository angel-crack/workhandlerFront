import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewCaseModalComponent } from 'src/app/shared/components/modals/new-case-modal/new-case-modal.component';

@Component({
  selector: 'app-add-new-case',
  templateUrl: './add-new-case.component.html',
  styleUrls: ['./add-new-case.component.css']
})
export class AddNewCaseComponent {
  constructor(private dialogRef: MatDialog){}
  openModal():void {
    this.dialogRef.open(NewCaseModalComponent,{
      height: '70vh',
      width: '60vw',
    })
  }
}
