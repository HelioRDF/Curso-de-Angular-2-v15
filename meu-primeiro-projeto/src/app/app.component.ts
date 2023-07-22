import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-data-binding></app-data-binding>  
    <br>

    {{valor}}     
  <br>
  <button (click)="adicionar()">Adicionar</button>
  <br>
  <button (click)="destruirComponente()">Destruir Componente</button>
  <app-title *ngIf="destruir" title="Nova Msg"></app-title>
  <br>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <br>
  <app-diretivas-atributos></app-diretivas-atributos>
  <br>
  <app-new-component></app-new-component>
  <h3>Input</h3>
  <app-input [contador]="addValue"></app-input>
  <button (click)="adicionar()">Add</button>
  <h3>Output</h3>
  <ng-template [ngIf]="getDados">
  <h4>{{getDados.nome}}</h4>
  <h4>{{getDados.idade}}</h4>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <hr>
  <br>
  <app-food-add></app-food-add>
  <br>
  <app-food-list></app-food-list>
  <br>
  <app-fomrs></app-fomrs>
  <br> 
  <router-outlet></router-outlet>
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
