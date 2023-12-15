import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../app/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
    pathMatch: 'full',
  },
  {
    path: 'card/:id',
    loadComponent: () =>
      import('../app/components/card/card.component').then(
        (m) => m.CardComponent
      ),
    pathMatch: 'full',
  },
];
