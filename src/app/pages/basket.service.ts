import { Injectable } from '@angular/core';
import { basketProduct } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket : basketProduct[]=[];

  constructor() { }

  public addToBasket(name : string, price: number) : void{
    let item : basketProduct;
    if(this.basket.some((item) => item.name == name)){
      item = this.basket.find((item) => item.name == name);
      item.amount += 1;
      item.cumulatedPrice = item.price * item.amount;
    } else {
      item = {
        name,
        amount : 1,
        price,
        cumulatedPrice : price
      };
      this.basket.push(item);
    }
  }
  // public getFromBasket() : Product{
  //   return
  // }

  public getBasket(){
    return this.basket;
  }

  public deleteFromBasket(nameToDelete: string) : void{
    this.basket = this.basket.filter(({name})=> name != nameToDelete)
  }
}
