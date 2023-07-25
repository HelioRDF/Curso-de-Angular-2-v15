import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html'
})
export class SobreComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => console.log(res.id, res.username, res)
    )
    //http://localhost:4200/sobre/1/xxx?novainfo=new&sexo=M
    this.activatedRoute.queryParams.subscribe(res => console.log(res))

    setInterval(() => {
      console.log("oi")
      this.router.navigate(['404']);
     // this.router.navigateByUrl("404");
    }, 11000)
  }


}
