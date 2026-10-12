import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then(m => m.Home),
    title: 'VUXEL | Diseño y Desarrollo Web'
  },
  {
    path: 'landing-page',
    loadComponent: () =>
      import('./pages/landing-page/landing-page')
        .then(m => m.LandingPage),
    title: 'Landing Page Personalizada | VUXEL'
  },
  {
    path: 'web-personalizada',
    loadComponent: () =>
      import('./pages/web-personalizada/web-personalizada')
        .then(m => m.WebPersonalizada),
    title: 'Web Personalizada | VUXEL'
  },
  {
    path: 'mantenimiento-web',
    loadComponent: () =>
      import('./pages/mantenimiento-web/mantenimiento-web')
        .then(m => m.MantenimientoWeb),
    title: 'Mantenimiento Web | VUXEL'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
