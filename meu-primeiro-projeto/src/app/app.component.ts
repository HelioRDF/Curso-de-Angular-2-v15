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
`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public valor: number = 1;
  public destruir: boolean = true;

  public adicionar(): number {
    return this.valor += 1;
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
