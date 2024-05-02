import { Component, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [MatSnackBarModule],
  template: ''
})
@Injectable({
  providedIn: 'root'
})
export class SnackbarMessageComponent {
  constructor(private _snackBar: MatSnackBar) {}
  
  snackBarConfig: MatSnackBarConfig = {
    duration: 1500
  }

  openSnack(msg:string, config: MatSnackBarConfig = this.snackBarConfig): void {
    this._snackBar.open(msg,'',config)
  }
}
