import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise (resolve => {
      //   server latency with 2 sec delay
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  // specific dish
  getDish(id: string): Promise<Dish> {
// tslint:disable-next-line: no-shadowed-variable
return new Promise (resolve => {
  //   server latency with 2 sec delay
  setTimeout(() => resolve(DISHES.filter((dish) => ( dish.id === id ))[0]), 2000 );
});
  }

  // featured property which have been added that dish
  getFeaturedDish(): Promise<Dish > {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise (resolve => {
      //   server latency with 2 sec delay
      setTimeout(() => resolve(DISHES.filter((dish) =>  dish.featued )[0]), 2000 );
    });
  }
}
