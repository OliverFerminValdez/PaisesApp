import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../Interfaces/Paises.interface';
import { PaisesService } from '../../Services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisesService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisCode(id) ),
        tap(console.log)
      )
      .subscribe(paises => this.pais = paises);

  }

}
