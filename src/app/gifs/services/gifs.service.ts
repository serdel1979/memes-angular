import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/interfaces.gift';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private api_key : string = '7KfehYgArY58eQaGQuoe6Iqu38KVl1SQ';
  private _historial: string[] = [];

  private servURL='https://api.giphy.com/v1/gifs';

  public resultados:Gif[]=[];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient){
     this._historial= JSON.parse(localStorage.getItem("historial")!) || [];
     this.resultados = JSON.parse(localStorage.getItem("ultimo")!) || [];
  }

  buscarGifts(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key',this.api_key)
    .set('limit','10')
    .set('q',query);

    this.http.get<SearchGIFResponse>(`${this.servURL}/search`,{params})
    .subscribe((response) =>{
      this.resultados = response.data;
      localStorage.setItem('ultimo', JSON.stringify(this.resultados));
    })
  }
}
