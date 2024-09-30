import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CarStore } from '../../store/car.store';
import { CurrencyPipe } from '@angular/common';
import { ClickInfDirective } from '../../directives/click-inf.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-checkout',
  standalone: true,
  imports: [HeaderComponent, CurrencyPipe , ClickInfDirective],
  templateUrl: './car-checkout.component.html',
  styleUrl: './car-checkout.component.scss'
})
export default class CarCheckoutComponent {
  cartStore = inject(CarStore);

  constructor(private router: Router){}

  removeItem(id: number): void {
    this.cartStore.removeFromCart(id);
  }

  clearAll(): void {
    this.cartStore.clearCart();
  }

  onPayment(){
    this.router.navigate(['/payment']);
  }

  onProduct(){
    this.router.navigate(['/products']);
  }


}
