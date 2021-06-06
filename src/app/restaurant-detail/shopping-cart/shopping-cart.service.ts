import { Injectable } from "@angular/core";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

@Injectable({
   providedIn: "root"
})
export class ShoppingCartService {

   items: CartItem[] = [];

   public clear() {
      this.items = [];
   }

   public addItem(item: MenuItem): void {
      let foundItem = this.items.find((mItem) => mItem.menuItem.id == item.id);

      if (foundItem) {
         this.increaseQty(foundItem)
      } else {
         this.items.push(new CartItem(item))
      }
   }

   public increaseQty(item: CartItem) {
      item.quantity += 1
   }

   public decreaseQty(item: CartItem) {
      item.quantity -= 1
   }

   public removeItem(item: CartItem): void {
      this.items.splice(this.items.indexOf(item, 1));
   }

   public total(): number {
      return this.items
         .map(item => item.value())
         .reduce((prev, value) => prev + value, 0)
   }
}