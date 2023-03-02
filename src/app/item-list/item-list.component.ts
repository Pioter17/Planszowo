import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit{

  selectedFilterId : string;

  filterIds = ["all", "cards", "board", "others"];

  constructor(
    private route : ActivatedRoute,
    private router : Router
  ){};

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      let filterId = params.get('filter');
      if (this.filterIds.includes(filterId!)){
        this.selectedFilterId = filterId!;
      }
      else {
        this.router.navigate(['**']);
      }
    })
  }


}
