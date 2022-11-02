import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rng-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  inputs: ['contador']
})
export class InputComponent implements OnInit {

  //@Input() 
  public contador: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
