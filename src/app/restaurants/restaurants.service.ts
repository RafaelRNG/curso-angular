import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant/restaurant.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Restaurant[] {
    return [];
  }
}
