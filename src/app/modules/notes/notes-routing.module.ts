import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesPageComponent } from './pages/notes-page/notes-page.component';

const routes: Routes = [
  {
    path: '',
    component: NotesPageComponent,
    outlet: 'child'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
