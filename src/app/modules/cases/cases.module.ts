import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';


@NgModule({
  declarations: [
    CasesPageComponent
  ],
  imports: [
    CommonModule,
    CasesRoutingModule
  ]
})
export class CasesModule { }
