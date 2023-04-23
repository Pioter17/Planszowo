import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, bufferTime, map, timeInterval } from 'rxjs';
import { Filters } from './filters';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  private gamesList$ = new BehaviorSubject<Filters>({
    isDefault : true,
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

  setGameFilters(filter : keyof Filters, value : boolean | number | string) : void {
    this.gamesList$.next({
      ...this.gamesList$.value,
      [filter] : value
    });
  }
  rootURL = 'https://api.boardgameatlas.com/api/search';

  getGames(filters : Filters) : Observable<unknown> {
    let queryParams = new HttpParams();

    queryParams = queryParams.append("maxPlayers", filters.maxPlayers).append("client_id","zE6Gyih2bj");
    return this.http.get(this.rootURL, {params: queryParams})
  }

}
