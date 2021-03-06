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

mailPatt= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Output() pasarArray = new EventEmitter<GrupEvents>();

errors: boolean[] = [false, false, false, false];
error : number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  EnviarDatos(nombre,lloc,correu,descrip,checked): void {
    console.log(checked)
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

    if(!correu.match(this.mailPatt)) {
      this.errors[3] = true
      this.error++;
    }
    else {
      this.errors[3] = false;
    }

    if(!checked) {
      this.errors[4] = true
      this.error++;
    }
    else {
      this.errors[4] = false;
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
    this.EnviarAlPadre();
  }

  EnviarAlPadre(): void {
    this.pasarArray.emit(new GrupEvents(this.nombre, this.lloc, this.correu, this.descrip));

  }

}
