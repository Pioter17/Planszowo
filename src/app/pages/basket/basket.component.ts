import { Component, OnInit } from '@angular/core';
import { BasketService } from '@pages/basket.service';
import { basketProduct } from 'src/app/product.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{

  activeBasket : basketProduct[];
  fullPrice : number;

  constructor(
    private basket: BasketService
  ){ }

  ngOnInit(): void {
    this.activeBasket = this.basket.getBasket();
    this.fullPrice = this.getFullPrice();
  }


  deleteBasketItem(nameToDelete : string): void{
    this.basket.deleteFromBasket(nameToDelete);
    this.activeBasket = this.activeBasket.filter(({name})=> name != nameToDelete)
    this.fullPrice = this.getFullPrice();
  }

  deleteAllItems() : void {
    this.basket.deleteAllFromBasket();
    this.activeBasket = [];
    this.fullPrice = this.getFullPrice();
  }

  getFullPrice() : number{
    let sum : number = 0;
    this.activeBasket.forEach((res)=>{
      sum += parseFloat(res.price);
    })
    return +sum.toFixed(2);
  }

}
