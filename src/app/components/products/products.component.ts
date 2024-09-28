import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {

  private readonly productAll = inject(ProductService);
  products = this.productAll.products;

}
