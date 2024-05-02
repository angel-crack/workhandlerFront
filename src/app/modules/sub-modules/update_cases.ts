import {Component, Inject} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


export function SnackBarMessage(msg:string, duration: number): void {
  const _snackBar = Inject(MatSnackBar)
  // constructor(private _snackBar: MatSnackBar) {}
  _snackBar;
}