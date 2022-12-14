import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit  {

  @Output() onEnter : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  dbouncer: Subject<string> =  new Subject();


  termino: string = '';


  constructor() { }
 
  ngOnInit() {
    this.dbouncer
    .pipe(
      debounceTime(300)
    ).subscribe(valor => {
      this.onDebounce.emit(valor)
    })
  }

  buscar(){
    this.onEnter.emit(this.termino);
    
  }
  teclaPresionada(event: any){
    this.dbouncer.next(this.termino);
  }

}
