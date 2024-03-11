import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'templates',
    loadChildren: () => import('@modules/templates/templates.module').then(m => m.TemplatesModule)
  },
  {
    path: 'cases',
    loadChildren: () => import('@modules/cases/cases.module').then(m => m.CasesModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('@modules/notes/notes.module').then(m => m.NotesModule)
  },
  {
    path: 'options',
    loadChildren: () => import('@modules/options/options.module').then(m => m.OptionsModule)
  },
  {
    path: '**',
    redirectTo: '/cases'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
