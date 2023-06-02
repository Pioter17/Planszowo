import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, debounceTime, map, switchMap } from 'rxjs';
import { ApiManagerService } from './api-management.service';
import { Filters } from '@pages/offer/filters';
import { GameList } from '@pages/offer/types/game-list.type';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiManager: ApiManagerService
  ){ }

  gameFilters$ : Observable<Filters>

  gameList$ : Observable<GameList>

  ngOnInit(): void {
    this.gameFilters$ = this.apiManager.getGameFilters();
    this.gameList$ = this.gameFilters$.pipe(
      debounceTime(400),
      switchMap((res)=> this.apiManager.getGames(res)),
      map((res)=> {
        const games = res.games.map((item)=>({
        handle:item.handle,
        images: {
          large: item.images.large,
          medium: item.images.medium,
          small: item.images.small
        },
        description: item.description,
        price: item.price
      }));
      return {count : res.count, games};
      }),
    )
  }

  onSelected(filter : {id : string, name : string}){
    this.router.navigate([filter.id], {relativeTo: this.route});
  }

  changeFilters(filters : Filters){
    this.apiManager.setGameFilters(filters);
  }
}
