import { Component } from '@angular/core';
import { FoodListService } from '../../services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent {
  constructor(public foodListService: FoodListService) {

  }

  public listAddItem(value: string) {
    return this.foodListService.foodListAdd(value).subscribe({
      next: (res: any) => this.foodListService.foodListAlert(res),
      error: (err: any) => console.log(err)
    }
    );
  }

}
