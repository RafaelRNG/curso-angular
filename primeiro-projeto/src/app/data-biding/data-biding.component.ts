import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rng-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = 'rafael'
  public idade: number = 25
  public maisUm: number = 1

  public checkedDisable: boolean = false
  public imgSrc: string = 'https://blog.xpeducacao.com.br/wp-content/uploads/2021/12/o-que-acontece-quando-a-bolsa-de-valores-cai.jpg'
  public imgTitle: string = 'Property Binding'


  public position: { x: number, y: number } = {
    x: 0,
    y: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor)
  }

  mousemoveTeste(valor: MouseEvent) {
    //console.log(valor)
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
}
