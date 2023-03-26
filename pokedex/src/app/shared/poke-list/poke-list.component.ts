import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'rng-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any

  public getAllPokemons: any
  public apiError: boolean = false

  constructor(private service: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  public getPokemons() {
    this.service.apiListAllPokemons.subscribe({
      next: res => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons
      },
      error: res => {
        this.apiError = true
      }
    })
  }

  public searchPokemon(value: String) {
    const filter = this.setAllPokemons.filter((res: any) => !res.name.indexOf(value.toLowerCase()))

    this.getAllPokemons = filter
  }
}