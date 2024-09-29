import { Component, inject, input, OnInit, Signal } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interface/product';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ShortDescriptionPipe } from '../../pipes/short-description.pipe';
import { HeaderComponent } from "../header/header.component";
import { CarStore } from '../../store/car.store';


@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [ShortDescriptionPipe, HeaderComponent],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.scss'
})
export default class DetailsProductComponent implements OnInit {  
  productId = input<number>(0, { alias: 'id' });
  product!: Signal<Product | undefined>;
  cartStore = inject(CarStore);
  
  starsArray: number[] = new Array(5).fill(0);
  
  
  
  private readonly productsSvc = inject(ProductService);
  private readonly _sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    this.product = this.productsSvc.getProductById(this.productId());    
    
  }

  generateSVG(index: number): SafeHtml {
    let svgContent = null;

    const rate = this.product()?.rating.rate as number;

    if (index + 1 <= Math.floor(rate)) {
      svgContent = `<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
              </path>
            </svg>`;
    } else if (index < rate) {
      svgContent = `<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="partialFillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" style="stop-color:currentColor; stop-opacity:1" />
              <stop offset="50%" style="stop-color:currentColor; stop-opacity:0" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#partialFillGradient)"></path>
        </svg>`;
    } else {
      svgContent = `<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
              </path>
            </svg>`;
    }
    return this._sanitizer.bypassSecurityTrustHtml(svgContent);
  }

  onAddToCar(product: Product): void{    
    this.cartStore.addToCart(product);   

  }

  
  

}
