import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<app-title title="Nova Msg"></app-title>
<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

  }


}
