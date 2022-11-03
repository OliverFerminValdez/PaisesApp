import { Component, OnInit } from '@angular/core';
import { Country } from '../../Interfaces/Paises.interface';
import { PaisesService } from '../../Services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  constructor(private paisService: PaisesService) { }
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) =>{
        this.hayError = true;
        this.paises = [];
      });
  }
  sugerencias(termino: string){
    this.hayError = false;
  }

}
