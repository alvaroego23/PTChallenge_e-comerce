import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { CardProductComponent } from "../card-product/card-product.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ CardProductComponent, HeaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {

  private readonly productAll = inject(ProductService);
  products = this.productAll.products;

}
