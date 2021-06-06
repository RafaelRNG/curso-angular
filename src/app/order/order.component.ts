import { Component, OnInit } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from '../shared/radio/radio-option.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão de Refeição", value: "REF" }
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }

  public cartItems() {
    return this.orderService.cartItems();
  }

  public increaseQty(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  public decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  public remove(item: CartItem) {
    this.orderService.removeItem(item);
  }
}
