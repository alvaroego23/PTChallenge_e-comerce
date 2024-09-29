import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./products.component')
  },
  {
    path: 'details/:id',
    loadComponent: () => import('../details-product/details-product.component'),
  },
];
export default routes;
