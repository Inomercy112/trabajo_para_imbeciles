import { Routes } from '@angular/router';
import { SideNavComponent } from './core/layout/side-nav/side-nav.component';

export const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/pay-facturation/pay-facturation.component').then(m => m.PayFacturationComponent)
      }

    ]
  }
];