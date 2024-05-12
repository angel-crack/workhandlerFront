import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from '../modules/home/components/side-bar/side-bar.component';
import { HeaderUserComponent } from '../modules/home/components/header/header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { CaseCardComponent } from './components/case-card/case-card.component';
import { CaseFilterPipe } from './pipes/case-filter.pipe';
import { SearchComponent } from '../modules/home/components/header/search/search.component';
import { UserComponent } from '../modules/home/components/header/user/user.component';
import { FilterComponent } from '../modules/home/components/header/filter/filter.component';
import { ViewComponent } from '../modules/home/components/header/view/view.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebexNotesModalComponent } from './components/modals/webex-notes-modal/webex-notes-modal.component';
import { MatButtonModule } from '@angular/material/button'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { AddNewCaseComponent } from '../modules/home/components/header/add-new-case/add-new-case.component';
import { AddNewWebexNotesComponent } from '../modules/home/components/header/add-new-webex-notes/add-new-webex-notes.component';
import { NewCaseModalComponent } from './components/modals/new-case-modal/new-case-modal.component';
import { NormalizeCasesPipe } from './pipes/normalize-cases.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CaseInfoComponent } from './components/modals/case-info/case-info.component';


@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    CaseCardComponent,
    CaseFilterPipe,
    SearchComponent,
    UserComponent,
    FilterComponent,
    ViewComponent,
    WebexNotesModalComponent,
    AddNewCaseComponent,
    AddNewWebexNotesComponent,
    NewCaseModalComponent,
    NormalizeCasesPipe,
    CaseInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  exports: [
    SideBarComponent,
    HeaderUserComponent,
    CaseCardComponent,
    CaseFilterPipe,
    NormalizeCasesPipe,
    SearchComponent,
    UserComponent,
    FilterComponent,
    ViewComponent,
    AddNewCaseComponent,
    AddNewWebexNotesComponent,
    NewCaseModalComponent,
    CaseInfoComponent
  ]
})
export class SharedModule { }
