import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickInf]',
  standalone: true
})
export class ClickInfDirective {

  @HostListener('click', ['$event'])
  handleClick(event: Event): void {
    console.log('Buy to cart:', event);    
  }

}
