import { Injectable } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) { }

  public cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  public increaseQty(item: CartItem) {
    this.shoppingCartService.increaseQty(item);
  }

  public decreaseQty(item: CartItem) {
    this.shoppingCartService.decreaseQty(item);
    if (item.quantity === 0) {
      this.removeItem(item)
    }
  }

  public removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }
}
