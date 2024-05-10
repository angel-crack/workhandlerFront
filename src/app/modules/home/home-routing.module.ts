import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sessionGuard } from 'src/app/core/guards/session.guard';

const routes: Routes = [
  {
    path: 'templates',
    loadChildren: () => import('@modules/templates/templates.module').then(m => m.TemplatesModule),
    canActivate: [sessionGuard]
  },
  {
    path: 'cases',
    loadChildren: () => import('@modules/cases/cases.module').then(m => m.CasesModule),
    canActivate: [sessionGuard]
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule),
    canActivate: [sessionGuard]
  },
  {
    path: 'notes',
    loadChildren: () => import('@modules/notes/notes.module').then(m => m.NotesModule),
    canActivate: [sessionGuard]
  },
  {
    path: 'options',
    loadChildren: () => import('@modules/options/options.module').then(m => m.OptionsModule),
    canActivate: [sessionGuard]
  },
  {
    path: 'seed',
    loadChildren: () => import('@modules/seed/seed.module').then(m => m.SeedModule),
    canActivate: [sessionGuard]
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
