import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  public mensagem:String = "data-binding works!!!"
  public nome:String = "Franca"

  public ano:number = 2023
  public checkedDisabled:boolean = false


  alterar(evento: MouseEvent){
     this.checkedDisabled = !this.checkedDisabled 
     console.log(evento)
     
  }

}

