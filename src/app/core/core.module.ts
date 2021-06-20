import { NgModule } from '@angular/core';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { OrderService } from '../order/order.service';

@NgModule({
  declarations: [],
  providers: [
    ShoppingCartService,
    RestaurantsService,
    OrderService
  ],
  imports: []
})
export class CoreModule { }
