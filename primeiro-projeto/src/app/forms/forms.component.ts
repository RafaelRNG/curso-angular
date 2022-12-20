import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'rng-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{ comida: string }> = [
    { comida: "X-Salada" },
    { comida: "X-Bacon" },
    { comida: "Coxinha" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm) {
    console.log(form.value)
  }
}