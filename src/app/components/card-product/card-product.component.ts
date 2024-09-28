import { Component, input } from '@angular/core';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  product = input.required<Product>();
  

}
