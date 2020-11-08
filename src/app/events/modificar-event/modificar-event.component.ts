import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { GrupEvents } from 'src/app/models/events.model';

@Component({
  selector: 'app-modificar-event',
  templateUrl: './modificar-event.component.html',
  styleUrls: ['./modificar-event.component.css']
})
export class ModificarEventComponent implements OnInit {

  @Input() modify: GrupEvents;
  @Output() complete = new EventEmitter<GrupEvents>();
  errors: boolean[] = [false, false, false, false];
  error : number = 0;

  constructor() { }

  ngOnInit(): void {}

  EnviarDatos(): void {
    this.error = 0;
    if (this.modify.nom === "") {
      this.errors[0] = true
      this.error++;
    }
    else {
      this.errors[0] = false;
    }

    if (this.modify.lloc === "") {
      this.errors[1] = true
      this.error++;
    }
    else {
      this.errors[1] = false;
    }

    if (this.modify.descrip.length < 2) {
      this.errors[2] = true
      this.error++;
    }
    else {
      this.errors[2] = false;
    }

    if(this.error === 0) {
      this.GuardarDatos()
    }

  }

  GuardarDatos(): void {
    this.complete.emit(this.modify);
  }


}
