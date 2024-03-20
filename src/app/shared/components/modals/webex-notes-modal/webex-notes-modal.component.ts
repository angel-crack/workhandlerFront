import { Component } from '@angular/core';


@Component({
  selector: 'app-webex-notes-modal',
  templateUrl: './webex-notes-modal.component.html',
  styleUrls: ['./webex-notes-modal.component.css'],
})
export class WebexNotesModalComponent {

  buttons: Array<any> = [
    {
      name: "Copy All",
      icon: "content_copy"
    },
    {
      name: "Remove Last Action",
      icon: "backspace"
    }
  ]
  action: string = ""
  webexSummary: string[] = ["Angel Eduardo Ubarnes Carbonell","&#13;&#10;David Haney Alvarez Bueno"]
}
