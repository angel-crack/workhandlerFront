import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsPageComponent } from './pages/options-page/options-page.component';

const routes: Routes = [
  {
    path: '',
    component: OptionsPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
