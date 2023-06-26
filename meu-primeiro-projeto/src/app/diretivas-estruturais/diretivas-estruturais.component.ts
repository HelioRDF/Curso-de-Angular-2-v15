import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public valorIf: boolean = true
  public novoValorIf: boolean = true
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Helio", idade: 34 },
    { nome: "Aline", idade: 30 },
    { nome: "Ester", idade: 10 },
    { nome: "Faby", idade: 34 },
  ];
  ngOnInit(): void {
    setInterval(() => {
      this.valorIf = !this.valorIf
    }, 3000)
  }

  mudarNovoValorIf() {
    this.novoValorIf = !this.novoValorIf
  }

  public onClickAddList() {
    this.list.push({ nome: "Luzia", idade: 60 })
  }

  public onClickEventList(event: number) {
    console.log(event)
    this.list.splice(event, 1)
  }

}