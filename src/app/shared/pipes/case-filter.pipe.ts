import { Pipe, PipeTransform } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';

@Pipe({
  name: 'caseFilter'
})
export class CaseFilterPipe implements PipeTransform {
  listFilter: CaseModel[] = []
  transform(value: CaseModel[], type: "cases" | "history" = "cases" ): CaseModel[] {

    for (var i = 0; i < value.length; i++) {
      if (value[i].folder === type){
        this.listFilter.push(value[i])
      }
    }
    
    return this.listFilter;
  }

}
