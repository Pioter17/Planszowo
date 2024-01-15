import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, count, debounceTime, map, switchMap } from 'rxjs';
import { ApiManagerService } from './api-management.service';
import { Filters } from '@pages/offer/filters';
import { GameList } from '@pages/offer/types/game-list.type';
import { gameListArray } from './constants/game-list.const';

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

  gameFilters$ : Observable<Filters>;

  gameList$ : Observable<GameList>;
  gameList = gameListArray;

  ngOnInit(): void {
    this.gameFilters$ = this.apiManager.getGameFilters();
    // this.gameList$ = this.gameFilters$.pipe(
    //   debounceTime(400),
    //   switchMap((res)=> this.apiManager.getGames(res)),
    //   map((res)=> {
    //     const games = res.games.map((item)=>({
    //     handle:item.handle,
    //     images: {                                                  <<<--------------------- To działało przed zamknięciem api
    //       large: item.images.large,
    //       medium: item.images.medium,
    //       small: item.images.small
    //     },
    //     description: item.description,
    //     price: item.price
    //   }));
    //   return {count : res.count, games};
    //   }),
    // )
  }

  onSelected(filter : {id : string, name : string}){
    this.router.navigate([filter.id], {relativeTo: this.route});
  }

  changeFilters(filters : Filters){
    // this.apiManager.setGameFilters(filters);   <-- stara funkcja kiedy api działało
    let newList: GameList = {count: 0, games : []};
    gameListArray.games.forEach((res)=>{
      if(res.handle.includes(filters.name)){
        newList.games.push(res);
        newList.count += 1;
      }
    })
    this.gameList = newList;
  }
}
