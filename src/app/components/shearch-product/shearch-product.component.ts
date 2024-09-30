import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, inject, input, OnInit, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-shearch-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shearch-product.component.html',
  styleUrl: './shearch-product.component.scss'
})
export class ShearchProductComponent  {
  products = input.required<Product[]>();  
  searchForm: FormGroup;

  filteredProducts = computed(() => {
    const searchTerm = this.searchForm.get('productSearch')?.value?.toLowerCase();    
    return this.products().filter(product =>
      product.title.toLowerCase().includes(searchTerm)
    );
  }); 

    

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      productSearch: ['', [ Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.searchForm.valid) {
      console.log('Búsqueda enviada:', this.searchForm.get('productSearch')?.value?.toLowerCase(), 'ResultadoBusqueda:' , this.filteredProducts() );
    }
  }

}
