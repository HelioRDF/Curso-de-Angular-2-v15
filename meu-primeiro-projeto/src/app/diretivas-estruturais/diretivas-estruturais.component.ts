import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public valorIf: boolean = true
  public novoValorIf: boolean = true
  ngOnInit(): void {
    setInterval(() => {
      this.valorIf = !this.valorIf
    }, 3000)
  }

  mudarNovoValorIf(){
    this.novoValorIf=!this.novoValorIf
  }

}
