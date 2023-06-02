import { Injectable } from '@angular/core';
import { basketProduct } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket : basketProduct[] = [];

  constructor() { }

  public addToBasket(name : string, price: string) : void{
    let item : basketProduct;
    if(this.basket.some((item) => item.name == name)){

    } else {
      item = {
        name,
        price
      };
      this.basket.push(item);
    }
  }
  public getBasket(){
    return this.basket;
  }

  public deleteFromBasket(nameToDelete: string) : void{
    this.basket = this.basket.filter(({name})=> name != nameToDelete)
  }

  deleteAllFromBasket() : void {
    this.basket = [];
  }

}
