import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    HeaderUserComponent
  ]
})
export class SharedModule { }
