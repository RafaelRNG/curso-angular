import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rng-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent implements OnInit {

  @Output() public emitSearch: EventEmitter<String> = new EventEmitter<String>()

  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string) {
    this.emitSearch.emit(value)
  }
}