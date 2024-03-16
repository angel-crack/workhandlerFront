import { Component, ViewChild } from '@angular/core';
import { UserOptionsComponent } from '../user-options/user-options.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {
  @ViewChild(UserOptionsComponent) child!: UserOptionsComponent;
  
  menuActive:boolean = false;

  showMenu(){
    this.child.showMenu()
  }
  receiveData(a:boolean):void{
    this.menuActive = a;
  }
}
