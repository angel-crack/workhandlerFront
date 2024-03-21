import { Component } from '@angular/core';


@Component({
  selector: 'app-webex-notes-modal',
  templateUrl: './webex-notes-modal.component.html',
  styleUrls: ['./webex-notes-modal.component.css'],
})
export class WebexNotesModalComponent {


  days: string[] = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
  ];
  months: string[] = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];
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
  action!:string;
  webexSummary: Array<any> = [];
  webexSummary_list: string = "";

  addAction(event: any) {
    this.webexSummary.push(`${this.getDate()} ${event.target.value}`)
    this.webexSummary_list = this.webexSummary.join('\n');
    this.action = "";
    
  }

  getDate():string{
    const currDate = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let dateFormatted: string = ''
    dateFormatted = `[+] ${this.days[currDate.getDay()]} ${currDate.getDate()} / ${this.months[currDate.getMonth()]} - ${formatter.format(currDate)} -`
    return dateFormatted
  }
  callSearch(term: string):void {
       console.log(term)
    }
}
