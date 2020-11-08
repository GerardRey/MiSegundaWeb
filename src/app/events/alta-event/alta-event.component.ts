import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GrupEvents } from 'src/app/models/events.model';

@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent implements OnInit {

nombre: string ="";
lloc: string ="";
correu: string="";
descrip: string="";

arrayEvents: GrupEvents[] = [];

@Output() pasarArray = new EventEmitter<Array<GrupEvents>>();

errors: boolean[] = [false, false, false, false];
error : number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  EnviarDatos(nombre,lloc,correu,descrip): void {
    this.error = 0;
    if (nombre === "") {
      this.errors[0] = true
      this.error++;
    }
    else {
      this.errors[0] = false;
    }

    if (lloc === "") {
      this.errors[1] = true
      this.error++;
    }
    else {
      this.errors[1] = false;
    }

    if (descrip.length < 2) {
      this.errors[2] = true
      this.error++;
    }
    else {
      this.errors[2] = false;
    }

    if(this.error === 0) {
      this.GuardarDatos(nombre,lloc,correu,descrip)
    }

  }

  GuardarDatos(nombre,lloc,correu,descrip): void {
    this.nombre = nombre;
    this.lloc = lloc;
    this.correu = correu;
    this.descrip = descrip;
    this.GuardarModelEvent();
  }

  GuardarModelEvent(): void {
    this.arrayEvents.push(new GrupEvents(this.nombre, this.lloc, this.correu, this.descrip));
    this.EnviarAlPadre();
  }

  EnviarAlPadre(): void {
    this.pasarArray.emit(this.arrayEvents);

  }

}
