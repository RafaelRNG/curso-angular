import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MEAT_API } from 'app.api';
import { Observable } from 'rxjs';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { Order } from './order.model';

import { LoginService } from "../security/login/login.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private shoppingCartService: ShoppingCartService,
    private httpClient: HttpClient,
    private loginService: LoginService) { }

  itemsValue(): number {
    return this.shoppingCartService.total();
  }

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

  public clear() {
    this.shoppingCartService.clear()
  }

  public checkOrder(order: Order): Observable<Order> {
    let headers = new HttpHeaders()
    if (this.loginService.isLoggedIn()) {
      headers = headers.set("Authorization", `Bearer ${this.loginService.user.accessToken}`)
    }

    return this.httpClient.post<Order>(`${MEAT_API}/orders`, JSON.stringify(order), { headers })
  }
}
