import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {
  @Output() public enviarDados=new EventEmitter();
public list:Array<{nome:string,idade:number}>=[
  {nome:"Franca",idade:34},
  {nome:"Luzia",idade:34},
  {nome:"Aline",idade:34},
  {nome:"Faby",idade:34},
]

public getDados(event:number){
  this.enviarDados.emit(this.list[event]);

}

}
