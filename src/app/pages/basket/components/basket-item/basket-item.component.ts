import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketService } from '@pages/basket.service';
import { basketProduct } from 'src/app/product.interface';

@Component({
  selector: 'basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {

  @Input() item : basketProduct;
  @Input() remove : Function;

  public name : string;
  public price : number;

  constructor(
    private basket: BasketService
  ) { }

  ngOnInit() {
    this.name = this.item.name;
    this.price = this.item.price;
  }

}
