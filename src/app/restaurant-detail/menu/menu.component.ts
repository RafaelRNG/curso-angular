import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu?: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.menu = this.restaurantService.menuOfRestaurants(`${this.activatedRoute.parent?.snapshot.paramMap.get("id")}`)
  }

  public addMenuItem(item: MenuItem) {
    console.log(item)
  }
}
