import { Component, inject, input } from '@angular/core';
import { Product } from '../../interface/product';
import { RouterLink } from '@angular/router';
import { CarStore } from '../../store/car.store';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  product = input.required<Product>();
  cartStore = inject(CarStore);

  onAddToCar(product: Product): void{
    this.cartStore.addToCart(product);   

  }

}
