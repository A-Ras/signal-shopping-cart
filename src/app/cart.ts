import { computed, Injectable, signal } from '@angular/core';
import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {

  // Wir verwenden das signal() API von Angular, um den Zustand des Warenkorbs zu verwalten.
  // signal() erzeugt ein beschreibbares Signal mit einem Anfangswert.
  // Wir verwenden ein Array von CartItem-Objekten.
  // CartItem ist ein Interface, das ein Produkt und die Menge enthält.
  cartItems = signal<CartItem[]>([]);

  cartCount = computed(() => {
    // .reduce() ist eine Array-Methode, um einen einzelnen Wert zu berechnen.
    // Wir summieren die 'quantity' aller 'items'
    // computed() erstellt ein abgeleitetes Signal, das die Anzahl der Artikel im Warenkorb berechnet.
    // Es summiert die Mengen aller CartItem-Objekte im cartItems-Signal.
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  });



  cartTotal = computed(() => {
    // computed() erstellt ein abgeleitetes Signal, das den Gesamtpreis des Warenkorbs berechnet.
    // Es multipliziert die Menge jedes CartItem mit dem Preis des Produkts und summiert die Ergebnisse.
    return this.cartItems().reduce((total, item) => total + (item.quantity * item.product.price), 0);
   });

  constructor() { }

  addProduct(product: Product): void {
    // .update() ist der sichere Weg, ein Signal basierend auf seinem
    // vorherigen Wert zu aktualisieren.
    this.cartItems.update((items) => {
      const itemInCart = items.find((item) => item.product.id === product.id);
      if (itemInCart) {
        // Wenn das Produkt bereits im Warenkorb ist, erhöhen wir die Menge.
        itemInCart.quantity++;
        return [...items]; // Wir geben eine neue Kopie des Arrays zurück, um das Signal zu aktualisieren.
      } else {
        // Wenn das Produkt nicht im Warenkorb ist, fügen wir es hinzu.
        // Wir erstellen ein neues CartItem-Objekt mit der Menge 1.
        return [...items, { product, quantity: 1 }];
      }
    });
  }

  removeProduct(productId: number): void {
    this.cartItems.update(items => {
      // Wir filtern das Array, um das Produkt zu entfernen.
      return items.filter(item => item.product.id !== productId);
    });
  }

  clearCart(): void {
    // Diese Methode leert den Warenkorb, indem sie das cartItems-Signal auf ein leeres Array setzt.
    this.cartItems.set([]);
  }

}
