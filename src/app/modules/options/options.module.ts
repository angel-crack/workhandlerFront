import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionsRoutingModule } from './options-routing.module';
import { OptionsPageComponent } from './pages/options-page/options-page.component';


@NgModule({
  declarations: [
    OptionsPageComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule
  ]
})
export class OptionsModule { }
