import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit{
  @Output() sendRoute:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.sendRoute.emit('history')
  }
}
