import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';
import { CaseCardOptionsComponent } from '../case-card-options/case-card-options.component';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.css']
})
export class CaseCardComponent {
  
  @Input() case: CaseModel = {
    'name' : '',
    'number' : '',
    'folder' : '',
    'problem_description' : '',
    'current_status' : '',
    'action_plan' : '',
    'last_action' : ''
  }

  @ViewChild(CaseCardOptionsComponent) child!:CaseCardOptionsComponent;

  visible: boolean = false


  checkName(caseName:string,caseNumber:string){
    var completeName = caseNumber + ' - ' + caseName;
    if(completeName.length > 33){
      completeName = completeName.slice(0,32) + '...'
    }
    return completeName
  }
  showMenu():void {
    this.child.showMenu();
  }
  receiveData(IsActive:boolean):void {
    console.log(IsActive)
  }
}
