import { Routes } from '@angular/router';

export const FULL_ROUTES: Routes = [
  {
    path: 'form',
    loadChildren: () => import('./../../modules/form/form.module').then(mod => mod.FormModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./../../modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
  }
];
