import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'rng-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList[] = []

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(res => this.foodList = res)

    this.foodListService.emitEvent.subscribe(
      (res: FoodList) => {
        alert(`Olha você adicionou ${res.nome}`)
        this.foodListService.foodList().subscribe(res => this.foodList = res)
      })
  }
}