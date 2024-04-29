import { Pipe, PipeTransform } from '@angular/core';
import { CaseModel } from 'src/app/core/models/cases.models';

@Pipe({
  name: 'normalizeCases'
})
export class NormalizeCasesPipe implements PipeTransform {

  transform(value: any): CaseModel {
    const sr: CaseModel = {
      _id: value._id,
      tittle: value.tittle,
      number: value.number,
      problem_description: value.problem_description,
      current_status: value.current_status,
      action_plan: value.action_plan,
      last_action: value.last_action}    

    return sr;
  }

}
