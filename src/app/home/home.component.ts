import { Component, OnInit } from '@angular/core';
import { state, animate, trigger, style, transition } from "@angular/animations";

@Component({
  selector: 'mt-home',
  templateUrl: './home.component.html',
  animations: [
    trigger("visible", [
      state("isVisible", style({ opacity: 1 })),
      transition("void => visible", [
        style({ opacity: 0 }),
        animate("500ms 0ms ease-in")
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public useVisible: string = "visible";

  constructor() { }

  ngOnInit(): void {
  }
}