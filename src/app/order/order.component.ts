import { Component, OnInit } from '@angular/core';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from '../shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';
import { Router } from "@angular/router";

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão de Refeição", value: "REF" }
  ]

  constructor(
    private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
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

  public checkOrder(order: Order) {
    order.orderItem = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((order: any) => {
      this.router.navigateByUrl("order-summary");
      this.orderService.clear()
    })
    console.log(order);
  }
}
