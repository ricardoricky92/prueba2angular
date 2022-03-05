import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAnimeService {

  constructor(public http: HttpClient) { }

  getAnimes(){
    let options = {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  };
  return this.http.get<any>("https://animechan.vercel.app/api/quotes",options);
  //return this.http.get<any>("https://anime-facts-rest-api.herokuapp.com/api/v1",options);
  
 }
}