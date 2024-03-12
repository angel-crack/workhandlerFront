import { Injectable } from '@angular/core';
import * as dataRaw from '../../../data/cases.json'
import { Observable, of } from 'rxjs';
import { CaseModel } from 'src/app/core/models/cases.models';

@Injectable({
  providedIn: 'root'
})
export class GetCasesService {
  dataCases$: Observable<CaseModel[]> = of([])
  constructor() { 
    const {data}: any = (dataRaw as any).default
    this.dataCases$ = of(data)
  }
}
