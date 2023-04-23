import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, bufferTime, map, timeInterval } from 'rxjs';
import { Filters } from './filters';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  private defaultFilters : Filters = {
    isDefault : true,
    minPlayers : 2,
    maxPlayers : 4,
    name : ""
  }

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
  defaultURL = '?minPlayers=2&maxPlayers=4&client_id=zE6Gyih2bj';
  rootURL = 'https://api.boardgameatlas.com/api/search';

  getGames(filters : Filters) : Observable<unknown> {
    let filtersList = Object.entries(filters);

    if(filtersList[0][1] == true){
      return this.http.get(this.rootURL + this.defaultURL);
    } else if(filtersList[3][1] != ""){
      let nameURL = 'name='+ filtersList[3][1] +'&client_id=zE6Gyih2bj'
      return this.http.get(this.rootURL + nameURL);
    } else {
      let queryParams = new HttpParams();
      filtersList.slice(1).forEach(element => {
        queryParams = queryParams.append(element[0], element[1])
      });
      queryParams = queryParams.append("client_id","zE6Gyih2bj");

      return this.http.get(this.rootURL, {params: queryParams})
    }

  }

}
