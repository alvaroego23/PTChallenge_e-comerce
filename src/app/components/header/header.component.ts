import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarStore } from '../../store/car.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {  
  cartStore = inject(CarStore); 
}
