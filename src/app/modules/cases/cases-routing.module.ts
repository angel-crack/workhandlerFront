import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';

const routes: Routes = [
  {
    path: '',
    component: CasesPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
