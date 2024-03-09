import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesPageComponent } from './pages/templates-page/templates-page.component';


@NgModule({
  declarations: [
    TemplatesPageComponent
  ],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }
