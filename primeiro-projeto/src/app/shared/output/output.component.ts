import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rng-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter<{ nome: string, idade: number }>()


  public list: Array<{ nome: string, idade: number }> = [
    { nome: 'rafael', idade: 25 },
    { nome: 'Nay', idade: 31 },
    { nome: 'José', idade: 58 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getDados(index: number) {
    this.enviarDados.emit(this.list[index])
  }
}
