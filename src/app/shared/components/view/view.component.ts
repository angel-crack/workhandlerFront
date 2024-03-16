import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  selectedCoponent: "apps" | "ol" | "dialpad" = "dialpad";

  selectingComponent(a: "apps" | "ol" | "dialpad"):void {
    this.selectedCoponent = a;
  }

}
