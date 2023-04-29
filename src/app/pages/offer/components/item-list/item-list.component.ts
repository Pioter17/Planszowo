import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GameList } from '@pages/offer/types/game-list.type';
import { Product } from 'src/app/product.interface';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnChanges {

  @Input() gamesList: GameList;

  displayedItems : Product[] =  [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    this.createDisplayedArray();
  }

  createDisplayedArray(){
    if (this.gamesList?.games){
      this.displayedItems = [];
      this.gamesList.games.forEach((res, counter)=>this.displayedItems.push({
        name : res.handle,
        id : counter,
        image : res.images.medium,
        details : ";dslfkhaslfjd;slj",
        price : 15
      }))
    }
  }

}
