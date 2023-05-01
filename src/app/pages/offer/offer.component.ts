import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiManagerService } from './api-management.service';
import { Filters } from './filters';
import { Observable, count, debounceTime, map, switchMap, tap } from 'rxjs';
import { GameItem, GameList } from './types/game-list.type';

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
        details: item.details,
        price: item.price
      }));
      return {count : res.count, games};
      }),
      tap((res) => console.log(res))
    )
  }

  onSelected(filter : {id : string, name : string}){
    this.router.navigate([filter.id], {relativeTo: this.route});
  }

  changeFilters(filter : keyof Filters, value : boolean | number | string) : void{

    this.apiManager.setGameFilters(filter, value);

  }
}
