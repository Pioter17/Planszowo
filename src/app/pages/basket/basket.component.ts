import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketService } from '@pages/basket.service';
import { basketProduct } from 'src/app/product.interface';
import { OrderFormDialogComponent } from './components/order-form-dialog/order-form-dialog.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{

  activeBasket : basketProduct[];
  fullPrice : number;
  orderSent : boolean;

  constructor(
    private basket: BasketService,
    private dialog: MatDialog
  ){ }

  ngOnInit(): void {
    this.activeBasket = this.basket.getBasket();
    this.fullPrice = this.getFullPrice();
    this.orderSent = false;
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

  openOrderFormDialog(){
    const dialogRef = this.dialog.open(OrderFormDialogComponent, {
      width: '900px',
      data: this.getFullPrice()
    })

    dialogRef.afterClosed().subscribe(result => {
      this.activeBasket = this.basket.getBasket();
      this.fullPrice = this.getFullPrice();
      if(this.activeBasket.length == 0) {
        this.orderSent = true
      }
    });
  }
}
