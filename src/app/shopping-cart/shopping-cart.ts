import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart';
import { Product } from '../product';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.scss'
})
export class ShoppingCart {

  constructor(public cartService: CartService) { }

  removeFromCart(productId: number): void {
    this.cartService.removeProduct(productId);
    //console.log(`Produkt mit ID ${productId} aus dem Warenkorb entfernt!`);
  }

  clearCart(): void {
    this.cartService.clearCart(); // Setzt den Warenkorb auf ein leeres Array
    //console.log('Warenkorb geleert!');
  }

}
