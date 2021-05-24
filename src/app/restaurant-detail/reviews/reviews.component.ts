import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews?: Observable<any>

  constructor(
    private restaurantsService: RestaurantsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.reviews = this.restaurantsService
      .findAllReviewsByRestaurantId(`${this.activatedRoute.parent?.snapshot.paramMap.get("id")}`)
  }
}
