import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeedRoutingModule } from './seed-routing.module';
import { SeedPageComponent } from './pages/seed-page/seed-page.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    SeedPageComponent
  ],
  imports: [
    CommonModule,
    SeedRoutingModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    FormsModule
  ]
})
export class SeedModule { }
