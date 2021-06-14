import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern = /^[0-9]*$/

  orderForm!: FormGroup

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão de Refeição", value: "REF" }
  ]

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control("", [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control("", [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control("", [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control("", [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(""),
      paymentOption: this.formBuilder.control("", [Validators.required])
    }, {validators: OrderComponent.equalsTo })
  }

  static equalsTo(group: AbstractControl): any {

    const email = group.get("email")
    const emailConfirmation = group.get("emailConfirmation")

    if(!email || !emailConfirmation) {
      return undefined
    }

    if(email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true}
    }
    return undefined
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
