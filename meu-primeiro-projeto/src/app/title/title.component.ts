import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = "Olá"
  constructor() { }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log("Set timeout ok")
      this.title= "new value"
    }, 5000)
  }

  ngOnChanges(): void {
    console.log("-> ngOnChanges")
  }


}
