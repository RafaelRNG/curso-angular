import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rng-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true

  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'Rafael RNG', idade: 25 },
    { nome: 'José', idade: 59 },
    { nome: 'Isabel', idade: 40 },
  ]

  public nome: string = 'rafael'

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.condition = !this.condition, 2000)
  }

  public onClick() {
    this.conditionClick = !this.conditionClick
  }

  onClickAddList() {
    this.list.push({ nome: 'Carolina', idade: 28 })
  }

  onClickEventList(event: number) {
    this.list.splice(event, 1)
  }
}