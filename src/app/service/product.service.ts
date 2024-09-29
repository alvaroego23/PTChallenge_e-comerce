import { EnvironmentInjector, inject, Injectable, runInInjectionContext, signal } from '@angular/core';
import { Product } from '../interface/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { map, mergeMap, Observable, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products = signal<Product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
  private readonly _injector = inject(EnvironmentInjector);

  constructor() {
    this.getAllProducts();
   }

  public getAllProducts() {
    this._http
      .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) => ({ ...product, qty: 1 }))
        ),        
        tap((products: Product[]) => this.products.set(products))
      )
      .subscribe();
  }

  public getProductById(id: number) {
    return runInInjectionContext(this._injector, () =>
      toSignal<Product>(
        this._http.get<Product>(`${this._endPoint}/products/${id}`)
      )
    );
  }  
}
