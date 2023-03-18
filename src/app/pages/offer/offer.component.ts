import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit{

  filters = [
    {"id" : "all", "name" : "Wszystko"},
    {"id" : "board", "name" : "Gry planszowe"},
    {"id" : "cards", "name" : "Gry karciane"},
    {"id" : "others", "name" : "Inne"},
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

  }

  onSelected(filter : {id : string, name : string}){
    this.router.navigate([filter.id], {relativeTo: this.route});
  }
}
