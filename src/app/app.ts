import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ShoppingCart } from './shopping-cart/shopping-cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductList, ShoppingCart],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'signal-shopping-cart';
}
