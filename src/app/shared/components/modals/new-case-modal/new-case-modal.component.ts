import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SharedDataFromModalService } from '../services/shared-data-from-modal.service';
import { CasesService } from '@modules/cases/services/cases.service';

@Component({
  selector: 'app-new-case-modal',
  templateUrl: './new-case-modal.component.html',
  styleUrls: ['./new-case-modal.component.css']
})
export class NewCaseModalComponent implements OnInit{

  constructor(private modalDataService: SharedDataFromModalService,
              private caseService: CasesService
  ) {}

  formLogin: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      tittle: new FormControl('',[Validators.required]),
      number: new FormControl(''),
      // GCI: new FormControl(''),
      problem_description: new FormControl('')
    })
  }

  sendData(): void{
    const formData = this.formLogin.value
    console.log(formData)
    const newData = this.filterEmptyFields(formData);
    console.log(newData)
    this.caseService.createCase$(newData)
  }

  filterEmptyFields(obj: any): any {
    const filteredObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== "") {
            filteredObj[key] = obj[key];
        }
    }
    return filteredObj;
  }

  buttons: Array<any> = [
    {
      name: "Create New Case",
      icon: "add"
    }
  ]


}
