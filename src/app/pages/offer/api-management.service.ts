import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, bufferTime, map, timeInterval } from 'rxjs';
import { Filters } from './filters';
import { GameList } from './types/game-list.type';

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
      [filter] : value,
      isDefault : false
    });
  }
  defaultURL = 'minPlayers=2&maxPlayers=4&client_id=zE6Gyih2bj';
  rootURL = 'https://api.boardgameatlas.com/api/search?';

  getGames(filters : Filters) : Observable<GameList> {
    let filtersList = Object.entries(filters);

    if(filtersList[0][1] == true){
      console.log(this.rootURL + this.defaultURL);
      return this.http.get<GameList>(this.rootURL + this.defaultURL);
    } else if(filtersList[3][1] != ""){
      let nameURL = 'name='+ filtersList[3][1] +'&client_id=zE6Gyih2bj';
      console.log(this.rootURL + nameURL);
      return this.http.get<GameList>(this.rootURL + nameURL);
    } else {
      //let queryParams = new HttpParams();
      let filtersURL : string = "";
      filtersList.slice(1).forEach(element => {
        filtersURL = filtersURL + "&" + element[0] + "=" + element[1];
        //queryParams = queryParams.append(element[0], element[1])
      });
      //queryParams = queryParams.append("client_id","zE6Gyih2bj");

      console.log(this.rootURL + filtersURL + '&client_id=zE6Gyih2bj');
      return this.http.get<GameList>(this.rootURL + filtersURL + '&client_id=zE6Gyih2bj');
    }

  }

}
