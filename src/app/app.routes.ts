import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'products',
        loadComponent: () => import('./components/products/products.component')
    },
    {
        path: 'product-details:id',
        loadComponent: () => import('./components/details-product/details-product.component')
    },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', redirectTo: 'products', pathMatch: 'full' },
];
