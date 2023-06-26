import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      this.valor=!this.valor;
    }, 500);
  }
  public date:Date= new Date();
  public valor: boolean = true;
  public cor: string = "blue";
  public list:Array<{nome:string}>=[
    {nome:"Helio"},
    {nome:"Aline"},
]


}
