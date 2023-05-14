import { Component, Input, OnInit } from '@angular/core';
import { basketProduct } from 'src/app/product.interface';

@Component({
  selector: 'app-basket-item',
  templateUrl: './basket-item.component.html',
  styleUrls: ['./basket-item.component.css']
})
export class BasketItemComponent implements OnInit {

  @Input() item : basketProduct;

  constructor() { }

  ngOnInit() {
  }

}
