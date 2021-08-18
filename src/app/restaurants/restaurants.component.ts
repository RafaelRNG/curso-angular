import { animate, trigger, state, style, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";

import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger("toggleSearch", [
      state("hidden", style({
        opacity: 0,
        "max-height": "0px"
      })),
      state("visible", style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition("* => *", animate("250ms 0s ease-in-out"))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  public searchBarState: string = "hidden";

  searchForm!: FormGroup
  searchControl!: FormControl
  restaurants: Restaurant[] = [];

  constructor(private restaurantsService: RestaurantsService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.formBuilder.control("")

    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
      .pipe(debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm => this.restaurantsService.findAll(searchTerm)))
      .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantsService.findAll()
      .subscribe(restaurants => this.restaurants = restaurants)
  }

  toggleSeach() {
    this.searchBarState = this.searchBarState === "hidden" ? "visible" : "hidden";
  }
}
