import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'rng-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any
  public isLoading: boolean = false
  public apiError: boolean = false

  constructor(private activeRouter: ActivatedRoute, private pokeService: PokeApiService) { }

  ngOnInit(): void {
    this.getPokemon
  }

  get getPokemon() {

    const id = this.activeRouter.snapshot.params['id']
    const pokemon = this.pokeService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    const name = this.pokeService.apiGetPokemons(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe({
      next: res => {
        this.pokemon = res
        this.isLoading = true
      },
      error: res => {
        this.apiError = true
      }
    })
  }
}