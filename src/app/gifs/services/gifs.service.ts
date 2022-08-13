import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/interfaces.gift';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key : string = '7KfehYgArY58eQaGQuoe6Iqu38KVl1SQ';
  private _historial: string[] = [];


  public resultados:Gif[]=[];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient){}

  buscarGifts(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get<SearchGIFResponse>(`http://api.giphy.com/v1/gifs/search?api_key=7KfehYgArY58eQaGQuoe6Iqu38KVl1SQ&q=${query}&limit=10`)
    .subscribe((response) =>{
      this.resultados = response.data;
    })
  }
}
