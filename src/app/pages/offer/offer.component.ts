import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiManagerService } from './api-management.service';
import { Filters } from './filters';
import { Observable, debounceTime, map, switchMap, tap } from 'rxjs';
import { GameList } from './types/game-list.type';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit{

  // filters = [
  //   {"id" : "all", "name" : "Wszystko"},
  //   {"id" : "board", "name" : "Gry planszowe"},
  //   {"id" : "cards", "name" : "Gry karciane"},
  //   {"id" : "others", "name" : "Inne"},
  // ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiManager: ApiManagerService
  ){ }

  gameFilters$ : Observable<Filters>

  gameList$ : Observable<unknown>

  ngOnInit(): void {
    this.gameFilters$ = this.apiManager.getGameFilters();
    this.gameList$ = this.gameFilters$.pipe(
      debounceTime(400),
      switchMap((res)=> this.apiManager.getGames(res)),
      map((res)=> res.games.map((item)=>({
        name:item.handle,
        img: item.images.medium,
      } ))  ),
      tap((res) => console.log(res))
    )
  }

  onSelected(filter : {id : string, name : string}){
    this.router.navigate([filter.id], {relativeTo: this.route});
  }

  changeFilters(filter : keyof Filters, value : boolean | number | string) : void{

    this.apiManager.setGameFilters(filter, value);

    //console.log("sdklfghasdlf");
  }
}
