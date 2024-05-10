import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeedPageComponent } from './pages/seed-page/seed-page.component';

const routes: Routes = [
  {
    path: '',
    component: SeedPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeedRoutingModule { }
