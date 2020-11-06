import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent implements OnInit {

nombre: string ="";

  constructor() { }

  ngOnInit(): void {
  }
  EnviarNombre(nombre) {
    this.nombre = nombre;
    console.log(this.nombre);
  }

}
