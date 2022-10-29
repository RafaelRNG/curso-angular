import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'rng-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public title: string = 'bem vindo'

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log('foi alterado')
  }

  ngOnDestroy(): void {
    console.log('Deu bom, ele foi destruido')
  }
}