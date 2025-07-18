import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Sample product data
  private products: Product[] = [
    {
      id: 1,
      name: 'Super-Tastatur',
      price: 79.99,
      imageUrl: 'keyboard.jpg',
    },
    {
      id: 2,
      name: 'Ergonomische Maus',
      price: 49.5,
      imageUrl: 'mouse.jpg',
    },
    {
      id: 3,
      name: '4K Monitor',
      price: 349.0,
      imageUrl: 'monitor.jpg',
    },
    {
      id: 4,
      name: 'Profi-Headset',
      price: 120.0,
      imageUrl: 'headset.jpg',
    },
    {
      id: 5,
      name: 'Mobile Telefon',
      price: 500,
      imageUrl: 'mobile.jpg',
    },
    {
      id: 6,
      name: 'iPad',
      price: 449.99,
      imageUrl: 'iPad.jpg',
    },
    {
      id: 7,
      name: 'Laptop',
      price: 1200.0,
      imageUrl: 'laptop.jpg',
    },
    {
      id: 8,
      name: 'Smartwatch',
      price: 199.99,
      imageUrl: 'Smartwatch.jpg',
    },
    {
      id: 9,
      name: 'Bluetooth Lautsprecher',
      price: 89.99,
      imageUrl: 'bluetooth-speaker.jpg',
    },
    

  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
