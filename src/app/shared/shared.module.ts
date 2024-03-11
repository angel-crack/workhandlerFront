import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { CaseCardComponent } from './components/case-card/case-card.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    CaseCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    HeaderUserComponent,
    CaseCardComponent
  ]
})
export class SharedModule { }
