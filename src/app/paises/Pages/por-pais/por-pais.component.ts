import { Component, OnInit } from '@angular/core';
import { Country } from '../../Interfaces/Paises.interface';
import { PaisesService } from '../../Services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  constructor(private paisService: PaisesService) { 
  }
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  sugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      }, (err) =>{
        this.hayError = true;
        this.paises = [];
      });
  }
  buscarSugerido(termino: string){
      this.buscar(termino);

  }
  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(paises => this.sugeridos = paises.splice(0,3),
      (err) => this.sugeridos = []);
  }
}
