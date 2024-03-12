import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { CaseFilterPipe } from './pipes/case-filter.pipe';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { FilterComponent } from './components/filter/filter.component';
import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    CaseCardComponent,
    CaseFilterPipe,
    SearchComponent,
    UserComponent,
    FilterComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SideBarComponent,
    HeaderUserComponent,
    CaseCardComponent,
    CaseFilterPipe,
    SearchComponent,
    UserComponent,
    FilterComponent,
    ViewComponent
  ]
})
export class SharedModule { }
