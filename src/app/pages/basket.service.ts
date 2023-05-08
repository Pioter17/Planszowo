import { Injectable } from '@angular/core';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private basket : Product[]

  constructor() { }

  public addToBasket(item : Product) : void{
    this.basket.push(item);
  }

  public getFromBasket() : Product{
    return
  }

  public deleteFromBasket(){

  }
}
