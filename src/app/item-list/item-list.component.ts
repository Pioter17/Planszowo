import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../product.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit{

  selectedFilterId : string ;

  items : Product[] = [
    {"id" : 1, "type" : 2, "name" : "Szachy", "details" : ";sssssssssssssssssssssssssssssssssssssssss", "price" : 200},
    {"id" : 2, "type" : 3, "name" : "Karty", "details" : ";kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk", "price" : 800},
    {"id" : 3, "type" : 4, "name" : "Kości", "details" : ";qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", "price" : 500},
    {"id" : 4, "type" : 2, "name" : "Paradox", "details" : ";ppppppppppppppppppppppppppppppppppppppppp", "price" : 50},
    {"id" : 5, "type" : 3, "name" : "Uno", "details" : ";ooooooooooooooooooooooooooooooooooooooooo", "price" : 100},
    {"id" : 6, "type" : 2, "name" : "Gomoku", "details" : ";ggggggggggggggggggggggggggggggggggggggggg", "price" : 250},
    {"id" : 7, "type" : 2, "name" : "Warcaby", "details" : ";wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", "price" : 300},
    {"id" : 8, "type" : 4, "name" : "Bierki", "details" : ";bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "price" : 400}
  ]

  itemsDisplayed : Product[] = []

  filterIds = ["all", "board", "cards", "others"];
  typeOfProduct : number;

  constructor(
    private route : ActivatedRoute,
    private router : Router
  ){};

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let filterId = params.get('filter');
      if (this.filterIds.includes(filterId!)){
        this.selectedFilterId = filterId!;
        this.typeOfProduct = this.filterIds.indexOf(this.selectedFilterId) + 1;
        this.createDisplayedArray(this.typeOfProduct);
      }
      else {
        this.router.navigate(['**']);
      }
    })
  }
  createDisplayedArray(typeOfItem : number){
    this.itemsDisplayed = [
      ...this.items.filter((item, ind) => typeOfItem == item.type || typeOfItem == 1)
    ]
  }



}
