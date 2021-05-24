import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant/restaurant.model';
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from 'app.api';
import { Observable } from 'rxjs';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`${MEAT_API}/restaurants`)

  }

  public findById(id: string): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  public findAllReviewsByRestaurantId(id: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  public menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
  }
}