import { Pipe, PipeTransform } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';

@Pipe({
  name: 'caseFilter'
})
export class CaseFilterPipe implements PipeTransform {
  listFilter: CaseModel[] = []
  transform(value: any, type: "cases" | "history" = "cases" ): CaseModel[] {


    
    return this.listFilter;
  }

}
