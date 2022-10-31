import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rng-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true
  public heightPx: string = '20px'
  public backgroundColor: string = 'red'
  public nome: string = ''
  public date: Date = new Date()

  public list: Array<{ nome: string }> = [{ nome: 'rafael' }]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor
      this.heightPx === '20px' ? this.heightPx = '25px' : this.heightPx = '20px'
      this.backgroundColor === 'red' ? this.backgroundColor = 'blue' : this.backgroundColor = 'red'
    }, 2000)
  }

  salvar() {
    this.list.push({ nome: this.nome })
    this.nome = ''
  }
}
