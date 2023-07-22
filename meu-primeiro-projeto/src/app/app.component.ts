import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-binding></app-data-binding>
  {{valor}}
  <br>
  <button (click)="adicionar()">Adicionar</button>
  <br>
  <button (click)="destruirComponente()">Destruir Componente</button>
<app-title *ngIf="destruir" title="Nova Msg"></app-title>
<router-outlet>x</router-outlet>
<app-diretivas-estruturais></app-diretivas-estruturais>
<app-diretivas-atributos>
<h4>Meu H4</h4>
<h3>Meu H3</h3>
</app-diretivas-atributos>
<app-new-component></app-new-component>
<hr>
<h2>Input</h2>
<app-input [contador]="addValue"></app-input>
<button (click)="adicionar()">Add</button>

<h2>Output</h2>
<ng-template [ngIf]="getDados">
<h3>{{getDados.nome}}</h3>
<h3>{{getDados.idade}}</h3>
</ng-template>
<app-output (enviarDados)="setDados($event)"></app-output>
<hr>
<app-food-add></app-food-add>
<app-food-list></app-food-list>
<hr>
<app-fomrs></app-fomrs>
  <hr>
<app-reactive-forms></app-reactive-forms>
`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public valor: number = 1;
  public addValue: number = 0;
  public destruir: boolean = true;


  public getDados: { nome: string, idade: number } | undefined;
  public setDados(event: any) {
    this.getDados = event

  }

  public adicionar() {
    this.valor += 1;
    this.addValue += 1;
  }

  public destruirComponente() {
    //this.destruir = false
    this.destruir = !this.destruir
  }
  ngOnInit(): void {

  }
  ngDoCheck(): void {
    console.log("ngDoCheck()")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit()")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked()")
  }
  ngAfterViewInit(): void {
    console.log("ngDngAfterViewInit()")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked()")
  }

}
