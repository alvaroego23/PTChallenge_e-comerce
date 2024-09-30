import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CardProductComponent } from "../card-product/card-product.component";
import { HeaderComponent } from "../header/header.component";
import { ShearchProductComponent } from '../shearch-product/shearch-product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ CardProductComponent, HeaderComponent, ShearchProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {

  private readonly productAll = inject(ProductService);
  products = this.productAll.products;  

}
