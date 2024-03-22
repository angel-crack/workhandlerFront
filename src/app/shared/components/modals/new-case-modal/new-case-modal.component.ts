import { Component } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-case-modal',
  templateUrl: './new-case-modal.component.html',
  styleUrls: ['./new-case-modal.component.css']
})
export class NewCaseModalComponent {
  constructor(private _formBuilder: FormBuilder) {}
  
  buttons: Array<any> = [
    {
      name: "Create New Case",
      icon: "add"
    }
  ]

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });


}
