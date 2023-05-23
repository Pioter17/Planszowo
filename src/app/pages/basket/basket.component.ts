import { Component, OnInit } from '@angular/core';
import { BasketService } from '@pages/basket.service';
import { basketProduct } from 'src/app/product.interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{

  activeBasket : basketProduct[]

  constructor(
    private basket: BasketService
  ){ }

  ngOnInit(): void {
    this.activeBasket = this.basket.getBasket();
    console.log(this.activeBasket)
  }


  deleteBasketItem(nameToDelete : string){
    this.basket.deleteFromBasket(nameToDelete);
    this.activeBasket = this.activeBasket.filter(({name})=> name != nameToDelete)
  }

}
