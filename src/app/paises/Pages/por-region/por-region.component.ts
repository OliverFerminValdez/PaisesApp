import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../Interfaces/Paises.interface';
import { PaisesService } from '../../Services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent{

  constructor(private paisService: PaisesService) { 
  }
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  regiones: string[] = ['africa','americas','asia','europe','oceania'];
  regionAct: string = '';  

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarRegion(termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) =>{
        this.hayError = true;
        this.paises = [];
      });
  }
  activarRegion(region : string){
    this.regionAct = region;
    this.buscar(this.regionAct)

  }
  getClassCSS(region : string){
    return (region === this.regionAct) ? 'btn btn-primary': 'btn btn-outline-primary'
  }
  sugerencias(termino: string){
    this.hayError = false;
  }

}
