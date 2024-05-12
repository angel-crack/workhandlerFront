import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-case-info',
  templateUrl: './case-info.component.html',
  styleUrls: ['./case-info.component.css']
})
export class CaseInfoComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  
  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      tittle: new FormControl(this.data.tittle || '' ,[Validators.required]),
      number: new FormControl(this.data.number || ''),
      problem_description: new FormControl(this.data.problem_description || ''),
      current_status: new FormControl(this.data.current_status || ''),
      action_plan: new FormControl(this.data.action_plan || ''),
      last_action: new FormControl(this.data.last_action || '')
    })
    console.log(this.data)
  }
  buttons: Array<any> = [
    {
      name: "Update Case",
      icon: "update"
    }
  ]
}
