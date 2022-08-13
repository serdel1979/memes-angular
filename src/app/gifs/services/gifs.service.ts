import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial : string[]=[];
  
  getHistorial(){
    return [...this._historial];
  }

  buscarGifts( query:string){
    //this._historial.unshift(query);
    this._historial.unshift(query);
    console.log(this._historial);
  }
}
