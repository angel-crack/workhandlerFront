import { Component } from '@angular/core';

@Component({
  selector: 'app-case-card-options',
  templateUrl: './case-card-options.component.html',
  styleUrls: ['./case-card-options.component.css']
})
export class CaseCardOptionsComponent {

  visible: boolean = false
  showMenu():void {
    this.visible = !this.visible
  }


  
}
