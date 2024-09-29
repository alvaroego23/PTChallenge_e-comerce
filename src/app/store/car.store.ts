import {
    patchState,
    signalStore,
    withComputed,
    withMethods,
    withState,
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { Product } from '../interface/product';
import { ToastrService } from 'ngx-toastr';

export interface CarStore {
    products: Product[];
    totalAlmount: number;
    productsCount: number;
}
const initialState: CarStore = {
    products: [],
    totalAlmount: 0,
    productsCount: 0
}
export const CarStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ products }) => ({
        productsCount: computed(() => calculateProductCount(products())),
        totalAmount: computed(() => calculateTotalAmount(products())),
    })),
    withMethods(({ products, ...store }, toastSvc = inject(ToastrService)) => ({
        addToCart(product: Product) {
            const isProductInCart = products().find(
                (item: Product) => item.id === product.id
            );

            if (isProductInCart) {
                isProductInCart.qty++;
                isProductInCart.subTotal = isProductInCart.qty * isProductInCart.price;
                patchState(store, { products: [...products()] });
            } else {
                patchState(store, { products: [...products(), product] });
            }
            toastSvc.success(product.title, 'Add Product');
        },
        removeFromCart(id: number) {
            const updatedProducts = products().filter((product) => product.id !== id);
            const ProductCart = products().find(
                (item: Product) => item.id === id
            );
            patchState(store, { products: updatedProducts });
            toastSvc.info(ProductCart?.title,'Removed Product' );
        },
        clearCart() {
            patchState(store, initialState);
            toastSvc.info('Cleared All');
        },
    }))

)

function calculateTotalAmount(products: Product[]): number {
    return products.reduce(
        (acc, product) => acc + product.price * product.qty,
        0
    );
}

function calculateProductCount(products: Product[]): number {
    return products.reduce((acc, product) => acc + product.qty, 0);
}