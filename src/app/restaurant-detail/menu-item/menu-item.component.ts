import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, animate, state, style, transition } from "@angular/animations";
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger("menuItemAppeared", [
      state("ready", style({ opacity: 1 })),
      transition("void => ready", [
        style({ opacity: 0, transition: "translateY(-20px)" }),
        animate("500ms 0s ease-in")
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem?: MenuItem
  @Output() add = new EventEmitter()

  public menuItemState: string = "ready";

  constructor() { }

  ngOnInit(): void {
  }

  public emitAddEvent() {
    this.add.emit(this.menuItem)
  }
}
