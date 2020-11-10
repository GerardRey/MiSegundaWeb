import { Component, Input, OnInit } from '@angular/core';
import { GrupEvents } from '../models/events.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  arrayEvents: GrupEvents[] = [];

  cambiar: GrupEvents;

  constructor() {
   }

  ngOnInit(): void {
  }

  eventUpdated(){
    this.cambiar = undefined;
  }

  edit(model){
    this.cambiar = model;
  }

  eliminar(nmodel) {
    this.arrayEvents.splice(nmodel,1);
  }


  arrayDeEventos(Array): void {
    this.arrayEvents.push(Array);
  }

}
