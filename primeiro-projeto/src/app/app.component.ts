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
  
  <!-- Data binding -->
  <!-- <rng-data-biding> </rng-data-biding> -->

  <!-- Diretivas estruturais -->
  <!-- <rng-diretivas-estruturais> </rng-diretivas-estruturais> -->

  <!-- Diretivas atributos -->
  <!-- 
      <rng-diretivas-atributos>
    <h1> Aulas de diretivas atributo </h1>
    <hr>

    <span class="mainContent">
      este é um ótimo conteudo
    </span>
  </rng-diretivas-atributos>
  -->
  
  <!-- Pipes -->
  <!-- <rng-diretivas-atributos> </rng-diretivas-atributos> -->

  <rng-new-component> </rng-new-component>
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