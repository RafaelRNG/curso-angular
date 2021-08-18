import { Component, OnInit } from '@angular/core';
import { trigger, style, keyframes, animate, state, transition } from "@angular/animations";
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger("row", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", animate("300ms 0s ease-in", keyframes([
        style({ opacity: 0, transform: "translateX(-30px)", offset: 0 }),
        style({ opacity: 0.8, transform: "translateX(10px)", offset: 0.8 }),
        style({ opacity: 1, transform: "translateX(0px)", offset: 1 }),
      ]))),
      transition("ready => void", animate("300ms 0s ease-out", keyframes([
        style({ opacity: 1, transform: "translateX(0px)", offset: 0 }),
        style({ opacity: 0.8, transform: "translateX(-10px)", offset: 0.2 }),
        style({ opacity: 0, transform: "translateX(30px)", offset: 1 }),
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  public rowState: string = "ready";

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  clear(): void {
    this.shoppingCartService.clear();
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem): void {
    this.shoppingCartService.addItem(item);
  }
}
