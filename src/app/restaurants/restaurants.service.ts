import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant/restaurant.model';
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from 'app.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`);
  }
}
