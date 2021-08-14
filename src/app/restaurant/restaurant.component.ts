import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from "@angular/animations";
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger("restaurantAppeared", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, transform: "translate(-30px, -10px)" }),
        animate("500ms 0s ease-in-out")
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  public restaurantsState: string = "ready";

  @Input() restaurant: Restaurant = {};

  constructor() { }

  ngOnInit(): void {
  }

}
