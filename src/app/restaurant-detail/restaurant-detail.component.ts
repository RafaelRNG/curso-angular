import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../restaurant/restaurant.model';

import { RestaurantsService } from "./../restaurants/restaurants.service";

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  public isRow: string = "ready";

  restaurant: Restaurant = {};

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.restaurantsService.findById(`${this.activatedRoute.snapshot.paramMap.get("id")}`)
      .subscribe(restaurant => this.restaurant = restaurant)
  }
}