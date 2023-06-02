import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filters } from './filters';
import { GameList } from './types/game-list.type';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  private gamesList$ = new BehaviorSubject<Filters>({
    minPlayers : 2,
    maxPlayers : 4,
    name : ""
  });

  constructor(private http: HttpClient) { }

  queryUrl : string;
  output : Observable<any>;

  getGameFilters() : Observable<Filters>{
    return this.gamesList$.asObservable();
  }

  setGameFilters(filters : Filters) : void{
    this.gamesList$.next(filters);
  }

  defaultURL = 'minPlayers=2&maxPlayers=4&client_id=zE6Gyih2bj';
  rootURL = 'https://api.boardgameatlas.com/api/search?';

  getGames(filters : Filters) : Observable<GameList> {
    let filtersList = Object.entries(filters);

    let filtersURL : string = "";
    filtersList.forEach(element => {
      filtersURL = filtersURL + element[0] + "=" + element[1] + "&";
      //queryParams = queryParams.append(element[0], element[1])
    });
    //queryParams = queryParams.append("client_id","zE6Gyih2bj");

    console.log(this.rootURL + filtersURL + 'client_id=zE6Gyih2bj');
    return this.http.get<GameList>(this.rootURL + filtersURL + 'client_id=zE6Gyih2bj');
  }
}
