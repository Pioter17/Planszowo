import { Component, Input, OnInit } from '@angular/core';
import { basketProduct } from 'src/app/product.interface';

@Component({
  selector: 'basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.scss']
})
export class BasketItemComponent implements OnInit {

  @Input() item : basketProduct;

  public name : string;
  public price : number;

  constructor() { }

  ngOnInit() {
    this.name = this.item.name;
    this.price = this.item.price;
  }

}
