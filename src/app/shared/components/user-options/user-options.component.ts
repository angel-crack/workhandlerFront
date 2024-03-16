import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.css']
})
export class UserOptionsComponent {
  @Output() menuActive: EventEmitter<boolean> = new EventEmitter()

  visible: boolean = false;

  showMenu():void {
    this.visible = !this.visible;
    this.menuActive.emit(this.visible)
  }

}
