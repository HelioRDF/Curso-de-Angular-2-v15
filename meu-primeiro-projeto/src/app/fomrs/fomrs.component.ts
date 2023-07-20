import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fomrs',
  templateUrl: './fomrs.component.html',
  styleUrls: ['./fomrs.component.scss']
})
export class FomrsComponent {
  public listComida: Array<{ comida: string }> = [
    { comida: "Arroz" },
    { comida: "Feijão" },

  ]
  public submitForm(form:NgForm){
    console.log(form.value)
  }

}
