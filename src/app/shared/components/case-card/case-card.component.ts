import { Component, Input, OnInit } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';

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
  visible: boolean = false


  checkName(caseName:string,caseNumber:string){
    var completeName = caseNumber + ' - ' + caseName;
    if(completeName.length > 33){
      completeName = completeName.slice(0,32) + '...'
    }
    return completeName
  }
  showMenu():void {
    this.visible = !this.visible
  }
}
