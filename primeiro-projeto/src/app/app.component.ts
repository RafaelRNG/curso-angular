import {
  Component, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'rng-root',
  template: `
  <!--{{valor}}-->

  <!--button (click)='adicionar()'> Adicionar </!--button-->

  <!-- onChange -->
  <!--rng-title></-rng-title-->

  <!--DoCheck -->
  <!--rng-title *ngIf='destruir'> </!--rng-title-->
  <!--button (click)='destruirComponent()'>Destruir Component</!--button-->
  <rng-data-biding> </rng-data-biding>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  //public valor: number = 1
  //public destruir: boolean = true

  public ngOnInit(): void {
    /**setTimeout(() => {
      console.log('on init')
    }, 1000) **/
  }

  public destruirComponent() {
    //this.destruir = false
  }

  public adicionar(): number | void {
    //return this.valor += 1
  }

  ngDoCheck(): void {
    //console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    //console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    //console.log('ngAfterContentChecked')
  }

  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    //console.log('ngAfterViewChecked')
  }
}