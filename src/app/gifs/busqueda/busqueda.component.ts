import { AbstractType, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

 
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private buscarGifts: GifsService){}

  buscar(){
    if (this.txtBuscar.nativeElement.value != ""){
      this.buscarGifts.buscarGifts(this.txtBuscar.nativeElement.value);
      this.txtBuscar.nativeElement.value = "";
    }
  }

}
