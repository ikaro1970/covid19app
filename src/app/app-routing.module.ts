import { LayoutComponent } from './shared/commons/layout/layout.component';
import { FULL_ROUTES } from './shared/routes/full.routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form/register',
    pathMatch: 'full'
  },
  { path: '', component: LayoutComponent, children: FULL_ROUTES },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
