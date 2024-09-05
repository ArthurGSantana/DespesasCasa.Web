import { Routes } from '@angular/router';
import { PublicComponent } from './containers/public/public.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./modules/public/login/login.component')
      }
    ]
  }
];
