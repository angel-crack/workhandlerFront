import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { CasesPageComponent } from './pages/cases-page/cases-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CasesPageComponent
  ],
  imports: [
    CommonModule,
    CasesRoutingModule,
    SharedModule
  ]
})
export class CasesModule { }
