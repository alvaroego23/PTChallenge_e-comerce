import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',        
        loadChildren: () => import('./components/products/products.routes'),
      },   
    {
        path:'sing-in',
        loadComponent:()=> import('./components/login/login.component')
    },
    {
        path:'car-checkout',
        loadComponent:()=> import('./components/car-checkout/car-checkout.component')
    },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
