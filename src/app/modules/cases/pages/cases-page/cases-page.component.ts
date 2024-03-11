import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/cases.json'
import { CaseModel } from 'src/app/core/models/cases.models';

@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.css']
})
export class CasesPageComponent implements OnInit {
  cases: CaseModel[] = []
  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.cases = data
  }
}
