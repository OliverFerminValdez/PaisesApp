import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../Interfaces/Paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  
  private apiUrl: string = 'https://restcountries.com/v2';
  private _paises: Country[] = [];

  constructor(private http: HttpClient) { }

  get paises(){
    return [...this._paises];
  }
  get httpParams(){
    return new HttpParams().set('fields','name,capital,flag,translations,alpha2Code,population')
  }
  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url,{params : this.httpParams});
  }
  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  buscarRegion(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }
  getPaisCode(id: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }

}
