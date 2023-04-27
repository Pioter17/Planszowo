import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.interface';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() gamesList: unknown;

  private games : Product[];
  constructor() { }

  ngOnInit() {
    //console.log(this.gamesList$)
    //makeItems();
  }

  private makeItems(){
  }
}
