import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient :HttpClient) { }

  showItems()
  {
   const  movieUrl= 'http://localhost:3000/movies';
   return this.httpClient.get(movieUrl);
  }



}
